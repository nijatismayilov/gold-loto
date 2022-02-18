import { FormView as PasswordRecoveryFormView } from "components/PasswordRecoveryForm";
import { Language } from "features/localizationSlice";

export class LocalStorage {
	public static getLanguage = () => {
		return (localStorage.getItem("lang") || "az") as Language;
	};

	public static getAccessToken = () => {
		return localStorage.getItem("access-token");
	};

	public static getPasswordRecoveryFormView = () => {
		return localStorage.getItem("password-recovery-form-view") as PasswordRecoveryFormView;
	};

	public static setLanguage = (lang: Language) => {
		localStorage.setItem("lang", lang);
	};

	public static setAccessToken = (token: string) => {
		localStorage.setItem("access-token", token);
	};

	public static setPasswordRecoveryFormView = (view: PasswordRecoveryFormView) => {
		localStorage.setItem("password-recovery-form-view", view);
	};
}

// export const getLanguageFromLocalStorage = () => (localStorage.getItem("lang") || "az") as Language;

// export const getAccessTokenFromLocalStorage = () => localStorage.getItem("access-token");

// export const getPasswordRecoveryFormView = () =>
// 	localStorage.getItem("password-recovery-form-view") as PasswordRecoveryFormView;

// export const setLanguageToLocalStorage = (lang: Language) => localStorage.setItem("lang", lang);

// export const setAccessTokenToLocalStorage = (token: string) => {
// 	localStorage.setItem("access-token", token);
// };

// export const setPasswordRecoveryFormView = (view: PasswordRecoveryFormView) => {
// 	localStorage.setItem("password-recovery-form-view", view);
// };

// export const removePasswordRecoveryFormView = () => {
// 	localStorage.removeItem("password-recovery-form-view");
// };
