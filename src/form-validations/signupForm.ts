import { object, string, ref } from "yup";

export type SignUpErrorMessages = {
	name: string;
	surname: string;
	pathernalName: string;
	phone: string;
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

export const validationSchema = (errorMessages: SignUpErrorMessages) => {
	const { name, surname, pathernalName, phone, email, username, password, passwordMatch } =
		errorMessages;

	return object().shape({
		name: string().required(name),
		surname: string().required(surname),
		pathernalName: string().required(pathernalName),
		phone: string().required(phone),
		email: string().required(email.required).email(email.invalid),
		username: string().required(username),
		password: string().required(password.required).min(6, password.min),
		passwordConfirm: string().oneOf([ref("password"), null], passwordMatch),
	});
};
