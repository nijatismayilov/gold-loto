import { SignUpFormLocale } from "locales/types";
import { object, string, ref } from "yup";

export type SignUpErrorMessages = {
	name: string;
	surname: string;
	pathernalName: string;
	phone: {
		required: string;
		invalid: string;
	};
	email: {
		required: string;
		invalid: string;
	};
	username: string;
	password: {
		required: string;
		min: string;
	};
	passwordMatch: string;
};

export const buildSignUpErrorMessages = (texts: SignUpFormLocale): SignUpErrorMessages => ({
	username: texts.usernameError,
	email: {
		required: texts.emailRequiredError,
		invalid: texts.emailInvalidError,
	},
	phone: {
		required: texts.phoneRequiredError,
		invalid: texts.phoneInvalidError,
	},
	name: texts.nameError,
	surname: texts.surnameError,
	pathernalName: texts.pathernalNameError,
	password: {
		required: texts.passwordRequiredError,
		min: texts.passwordMinError,
	},
	passwordMatch: texts.passwordMatchError,
});

export const validationSchema = (errorMessages: SignUpErrorMessages) => {
	const { name, surname, pathernalName, phone, email, username, password, passwordMatch } =
		errorMessages;

	return object().shape({
		name: string().required(name),
		surname: string().required(surname),
		pathernalName: string().required(pathernalName),
		phone: string().required(phone.required).length(12, phone.invalid),
		email: string().required(email.required).email(email.invalid),
		username: string().required(username),
		password: string().required(password.required).min(6, password.min),
		passwordConfirm: string().oneOf([ref("password"), null], passwordMatch),
	});
};
