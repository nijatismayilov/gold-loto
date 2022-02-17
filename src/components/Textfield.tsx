import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
	return (
		<MuiTextField
			ref={ref}
			sx={{
				"& .MuiInputBase-input": {
					backgroundColor: "white",
					borderColor: "#764A34",
				},
				"& .MuiTextField-root": {
					borderColor: "#764A34",
				},
			}}
			autoComplete='new-password'
			{...props}
		/>
	);
});

TextField.displayName = "TextField";

export default TextField;
