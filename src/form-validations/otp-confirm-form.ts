import { OtpConfirmFormLocale } from "locales/types";
import { object, ref, string } from "yup";

export type OtpConfirmErrorMessagges = {
	reset_code: string;
	new_password: {
		required: string;
		min: string;
	};
	confirm_password: string;
};

export const buildOtpConfirmErrorMessagges = (
	texts: OtpConfirmFormLocale
): OtpConfirmErrorMessagges => ({
	reset_code: texts.otpError,
	new_password: {
		required: texts.newPasswordRequiredError,
		min: texts.newPasswordMinError,
	},
	confirm_password: texts.confirmNewPasswordError,
});

export const validationSchema = (errorMessages: OtpConfirmErrorMessagges) => {
	const { reset_code, new_password, confirm_password } = errorMessages;

	return object().shape({
		otp: string().required(reset_code),
		newPassword: string().required(new_password.required).min(8, new_password.min),
		confirmNewPassword: string().oneOf([ref("newPassword"), null], confirm_password),
	});
};
