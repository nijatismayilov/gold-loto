import { SignInFormLocale } from "locales/types";
import { object, string } from "yup";

export type SignInErrorMessages = {
	username: string;
	password: string;
};

export const buildSignInErrorMessages = (texts: SignInFormLocale): SignInErrorMessages => ({
	username: texts.usernameError,
	password: texts.passwordError,
});

export const validationSchema = (errorMessages: SignInErrorMessages) => {
	const { username, password } = errorMessages;

	return object().shape({
		username: string().required(username),
		password: string().required(password),
	});
};
