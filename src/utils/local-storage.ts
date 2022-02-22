import { Language } from "features/localizationSlice";
import { FormView as PasswordRecoveryFormView } from "pages/login/password_recovery";

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

	public static getPasswordRecoveryUsername = () => {
		return localStorage.getItem("password-recovery-username") || "";
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

	public static setPasswordRecoveryUsername = (username: string) => {
		localStorage.setItem("password-recovery-username", username);
	};
}
