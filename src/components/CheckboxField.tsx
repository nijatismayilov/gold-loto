import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import classnames from "classnames";
import { Control, Controller } from "react-hook-form";

interface Props extends CheckboxProps {
	label: string;
	name: string;
	control: Control<any>;
	error?: boolean;
}

const CheckboxField: React.FC<Props> = (props) => {
	const { label, name, control, error = false, ...rest } = props;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<FormControlLabel
					control={
						<Checkbox
							{...rest}
							sx={{ color: error ? "#d32f2f" : "#764A34", "&.Mui-checked": { color: "#764A34" } }}
						/>
					}
					label={<span className={classnames({ "text-[#d32f2f]": error })}>{label}</span>}
					labelPlacement='end'
					checked={value}
					onChange={onChange}
				/>
			)}
		/>
	);
};

export default CheckboxField;
