import { PasswordRevoceryFormLocale } from "locales/types";
import { object, string } from "yup";

export type PasswordRecoveryErrorMessagges = {
	username: string;
};

export const buildPasswordRecoveryErrorMessagges = (
	texts: PasswordRevoceryFormLocale
): PasswordRecoveryErrorMessagges => ({
	username: texts.usernameError,
});

export const validationSchema = (errorMessages: PasswordRecoveryErrorMessagges) => {
	const { username } = errorMessages;

	return object().shape({
		username: string().required(username),
	});
};
