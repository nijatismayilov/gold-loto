import { OtpConfirmFormValues } from "components/OtpConfirmationForm";
import { PasswordResetConfirmPayload } from "features/types";

export const buildOtpConfirmPayload = (
	values: OtpConfirmFormValues
): PasswordResetConfirmPayload => ({
	username: values.username,
	reset_code: values.otp,
	new_password: values.newPassword,
});
