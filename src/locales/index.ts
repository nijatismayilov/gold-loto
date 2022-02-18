import { Language } from "features/localizationSlice";
import type {
	UnauthorizedLocale,
	SignUpFormLocale,
	FooterLocale,
	SignInFormLocale,
	PasswordRevoceryFormLocale,
} from "./types";

export type LocaleMap<Locale> = {
	[lang in Language]: Locale;
};

export const UNAUTHORIZED: LocaleMap<UnauthorizedLocale> = {
	az: {
		error: "Zəhmət olmasa daxil olun",
	},
	en: {
		error: "Please sign in",
	},
	ru: {
		error: "Пожалуйста, войдите",
	},
};

export const FOOTER: LocaleMap<FooterLocale> = {
	az: {
		copyright: "Bütün hüquqlar qorunur",
	},
	en: {
		copyright: "All rights reserved",
	},
	ru: {
		copyright: "Все права защищены",
	},
};

export const SIGNIN_FORM: LocaleMap<SignInFormLocale> = {
	az: {
		formTitle: "Giriş",
		usernameLabel: "İstifadəçi adı",
		usernamePlaceholder: "E-poçt və ya nömrə",
		usernameError: "İstifadəçi adı boş ola bilməz",
		passwordLabel: "Şifrə",
		passwordPlaceholder: "Şifrənizi daxil edin",
		passwordError: "Şifrə boş ola bilməz",
		submitButton: "Daxil ol",
		signupButton: "Qeydiyyat",
		forgotPasswordButton: "Şifrəni unutmusunuz?",
		donthaveaccount: "Hesabınız yoxdur?",
	},
	en: {
		formTitle: "Sign In",
		usernameLabel: "Username",
		usernamePlaceholder: "Email or phone number",
		usernameError: "Username can't be empty",
		passwordLabel: "Password",
		passwordPlaceholder: "Enter your password",
		passwordError: "Password can't be empty",
		submitButton: "Sign In",
		signupButton: "Sign Up",
		forgotPasswordButton: "Forgot Password?",
		donthaveaccount: "Don't have an account?",
	},
	ru: {
		formTitle: "Вход",
		usernameLabel: "Имя пользователя",
		usernamePlaceholder: "Электронная почта или номер телефона",
		usernameError: "Имя пользователя не может быть пустым",
		passwordLabel: "Пароль",
		passwordPlaceholder: "Введите пароль",
		passwordError: "Пароль не может быть пустым",
		submitButton: "Войти",
		signupButton: "Регистрация",
		forgotPasswordButton: "Забыли пароль?",
		donthaveaccount: "У вас нет аккаунта?",
	},
};

export const SIGNUP_FORM: LocaleMap<SignUpFormLocale> = {
	az: {
		formTitle: "Qeydiyyat",
		nameLabel: "Ad",
		nameError: "Ad boş ola bilməz",
		surnameLabel: "Soyad",
		surnameError: "Soyad boş ola bilməz",
		pathernalNameLabel: "Ata adı",
		pathernalNameError: "Ata adı boş ola bilməz",
		birthdayLabel: "Doğum tarixi",
		birthdayError: "Doğum tarixi boş ola bilməz",
		phoneLabel: "Mobil nömrə",
		phoneRequiredError: "Mobil nömrə boş ola bilməz",
		phoneInvalidError: "Mobil nömrə düzgün deyil",
		emailLabel: "E-poçt",
		emailRequiredError: "E-poçt boş ola bilməz",
		emailInvalidError: "E-poçt düzgün deyil",
		usernameLabel: "İstifadəçi adı",
		usernameError: "İstifadəçi adı boş ola bilməz",
		passwordLabel: "Şifrə",
		passwordRequiredError: "Şifrə boş ola bilməz",
		passwordMinError: "Şifrə 8 simvoldan az ola bilməz",
		passwordConfirmLabel: "Şifrə təsdiq",
		passwordMatchError: "Şifrələr eyni deyil",
		referralIdLabel: "Referal İD",
		submitButton: "Qeydiyyat",
		agreeToTerms: "Şərtlər və qaydalar toplusunu qəbul edirəm",
		haveAccount: "Hesabınız var?",
	},
	en: {
		formTitle: "Sign Up",
		nameLabel: "Name",
		nameError: "Name can't be empty",
		surnameLabel: "Surname",
		surnameError: "Surname can't be empty",
		pathernalNameLabel: "Pathernal Name",
		pathernalNameError: "Pathernal Name can't be empty",
		birthdayLabel: "Birthday",
		birthdayError: "Birthday can't be empty",
		phoneLabel: "Phone",
		phoneRequiredError: "Phone can't be empty",
		phoneInvalidError: "Phone is invalid",
		emailLabel: "Email",
		emailRequiredError: "Email can't be empty",
		emailInvalidError: "Email is invalid",
		usernameLabel: "Username",
		usernameError: "Username can't be empty",
		passwordLabel: "Password",
		passwordRequiredError: "Password can't be empty",
		passwordMinError: "Password must be at least 8 characters",
		passwordConfirmLabel: "Password Confirm",
		passwordMatchError: "Passwords doesn't match",
		referralIdLabel: "Referral ID",
		submitButton: "Sign Up",
		agreeToTerms: "I agree to the terms and conditions",
		haveAccount: "Already have an account?",
	},
	ru: {
		formTitle: "Регистрация",
		nameLabel: "Имя",
		nameError: "Имя не может быть пустым",
		surnameLabel: "Фамилия",
		surnameError: "Фамилия не может быть пустым",
		pathernalNameLabel: "Отчество",
		pathernalNameError: "Отчество не может быть пустым",
		birthdayLabel: "День рождения",
		birthdayError: "День рождения не может быть пустым",
		phoneLabel: "Телефон",
		phoneRequiredError: "Телефон не может быть пустым",
		phoneInvalidError: "Телефон не валиден",
		emailLabel: "Электронная почта",
		emailRequiredError: "Электронная почта не может быть пустой",
		emailInvalidError: "Электронная почта неверна",
		usernameLabel: "Имя пользователя",
		usernameError: "Имя пользователя не может быть пустым",
		passwordLabel: "Пароль",
		passwordRequiredError: "Пароль не может быть пустым",
		passwordMinError: "Пароль должен быть не менее 8 символов",
		passwordConfirmLabel: "Подтверждение пароля",
		passwordMatchError: "Пароли не совпадают",
		referralIdLabel: "Реферальный ID",
		submitButton: "Зарегистрироваться",
		agreeToTerms: "Я согласен с условиями и положениями",
		haveAccount: "Уже есть аккаунт?",
	},
};

export const PASSWORD_RECOVERY_FORM: LocaleMap<PasswordRevoceryFormLocale> = {
	az: {
		formTitle: {
			passwordRecovery: "Şifrə bərpası",
			otp: "OTP təsdiqləmə",
		},
		inputLabel: {
			passwordRecovery: "E-poçt",
			otp: "OTP kodu",
		},
		inputError: {
			passwordRecovery: "E-poçt boş ola bilməz",
			otp: "OTP kodu boş ola bilməz",
		},
		submitButton: "Təsdiq et",
	},
	en: {
		formTitle: {
			passwordRecovery: "Password Recovery",
			otp: "OTP Verification",
		},
		inputLabel: {
			passwordRecovery: "Email",
			otp: "OTP Code",
		},
		inputError: {
			passwordRecovery: "Email can't be empty",
			otp: "OTP Code can't be empty",
		},
		submitButton: "Submit",
	},
	ru: {
		formTitle: {
			passwordRecovery: "Восстановление пароля",
			otp: "Подтверждение OTP",
		},
		inputLabel: {
			passwordRecovery: "Электронная почта",
			otp: "Код OTP",
		},
		inputError: {
			passwordRecovery: "Электронная почта не может быть пустой",
			otp: "Код OTP не может быть пустым",
		},
		submitButton: "Подтвердить",
	},
};
