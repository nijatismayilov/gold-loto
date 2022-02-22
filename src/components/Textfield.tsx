import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { inputStyles } from "component-styles";
import { forwardRef } from "react";

const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
	return <MuiTextField ref={ref} sx={inputStyles} autoComplete='new-password' {...props} />;
});

TextField.displayName = "TextField";

export default TextField;
