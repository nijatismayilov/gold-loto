import { GameStatus } from "types/game";

export type UnauthorizedLocale = {
	error: string;
};

export type FooterLocale = {
	copyright: string;
};

export type SignInFormLocale = {
	formTitle: string;
	usernameLabel: string;
	usernamePlaceholder: string;
	usernameError: string;
	passwordLabel: string;
	passwordPlaceholder: string;
	passwordError: string;
	submitButton: string;
	signupButton: string;
	forgotPasswordButton: string;
	donthaveaccount: string;
};

export type SignUpFormLocale = {
	formTitle: string;
	nameLabel: string;
	nameError: string;
	surnameLabel: string;
	surnameError: string;
	pathernalNameLabel: string;
	pathernalNameError: string;
	birthdayLabel: string;
	birthdayError: string;
	phoneLabel: string;
	phoneRequiredError: string;
	phoneInvalidError: string;
	emailLabel: string;
	emailRequiredError: string;
	emailInvalidError: string;
	usernameLabel: string;
	usernameError: string;
	passwordLabel: string;
	passwordRequiredError: string;
	passwordMinError: string;
	passwordConfirmLabel: string;
	passwordMatchError: string;
	referralIdLabel: string;
	submitButton: string;
	agreeToTerms: string;
	haveAccount: string;
};

export type PasswordRevoceryFormLocale = {
	formTitle: string;
	usernameLabel: string;
	usernameError: string;
	submitButton: string;
	haveAccount: string;
};

export type OtpConfirmFormLocale = {
	formTitle: string;
	usernameLabel: string;
	otpLabel: string;
	otpError: string;
	newPasswordLabel: string;
	newPasswordRequiredError: string;
	newPasswordMinError: string;
	confirmNewPasswordLabel: string;
	confirmNewPasswordError: string;
	submitButton: string;
	haveAccount: string;
	passwordRecovery: string;
};

export type GameLocale = {
	circulation: string;
	status: {
		[key in GameStatus]: string;
	};
	price: string;
	prize: string;
	players: string;
	lastRow: string;
	lastPrize: string;
};
