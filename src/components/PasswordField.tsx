import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { inputStyles } from "component-styles";
import { forwardRef, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const getIcon = (showPassword: boolean) => {
	return showPassword ? <BsEyeFill /> : <BsEyeSlashFill />;
};

const PasswordField = forwardRef<HTMLDivElement, TextFieldProps>(({ ...props }, ref) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<TextField
			ref={ref}
			sx={inputStyles}
			{...props}
			type={showPassword ? "text" : "password"}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={() => setShowPassword(!showPassword)}>
							{getIcon(showPassword)}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
});

PasswordField.displayName = "PasswordField";

export default PasswordField;
