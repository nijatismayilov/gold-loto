import { FormHelperText } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

interface Props {
	name: string;
	control: Control<any>;
	helperText?: string;
	error?: boolean;
	label?: string;
	disabled?: boolean;
}

const PhoneNumberField: React.FC<Props> = (props) => {
	const { name, control, helperText, error = false, label = "", disabled = false } = props;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const { onChange, onBlur, value, name, ref } = field;

				return (
					<>
						<PhoneInput
							country='az'
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							inputProps={{
								ref,
								name,
								style: {
									width: "100%",
									padding: "16.5px 14px",
									paddingLeft: "52px",
								},
							}}
							specialLabel={label}
							countryCodeEditable={false}
							disableDropdown
							onlyCountries={["az"]}
							isValid={!error}
							placeholder='+994 (50) 111 11 11'
							disabled={disabled}
						/>

						{helperText && (
							<div className='mx-[14px]'>
								<FormHelperText error={error}>{helperText}</FormHelperText>
							</div>
						)}
					</>
				);
			}}
		/>
	);
};

export default PhoneNumberField;
