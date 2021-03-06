import { DatePicker as MuiDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Textfield from "components/Textfield";
import { subYears } from "date-fns";
import { az, enGB, ru } from "date-fns/locale";
import { Language, selectLanguage } from "features/localizationSlice";
import { Control, Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const localeMap: { [key in Language]: typeof az } = {
	az,
	ru,
	en: enGB,
};

const maskMap: { [key in Language]: string } = {
	en: "__/__/____",
	ru: "__.__.____",
	az: "__.__.____",
};

interface Props {
	label: string;
	helperText?: string;
	error?: boolean;
	control: Control<any>;
	name: string;
}

const DatePicker: React.FC<Props> = (props) => {
	const { label, helperText, error = false, control, name } = props;
	const language = useSelector(selectLanguage);

	const maxDate = subYears(new Date(), 18);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const { value, onChange } = field;

				return (
					<LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[language]}>
						<MuiDatePicker
							mask={maskMap[language]}
							onChange={(value) => {
								if (value == "Invalid Date") onChange(null);
								else onChange(new Date(value));
							}}
							value={value}
							label={label}
							maxDate={maxDate}
							defaultCalendarMonth={maxDate}
							disableFuture
							disableHighlightToday
							renderInput={(params) => (
								<Textfield {...params} error={error} helperText={helperText} fullWidth />
							)}
						/>
					</LocalizationProvider>
				);
			}}
		/>
	);
};

export default DatePicker;
