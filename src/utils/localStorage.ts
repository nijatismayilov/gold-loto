import { Language } from "features/localizationSlice";

export const getLanguageFromLocalStorage = () => (localStorage.getItem("lang") || "az") as Language;
export const getAccessTokenFromLocalStorage = () => localStorage.getItem("access-token");

export const setLanguageToLocalStorage = (lang: Language) => localStorage.setItem("lang", lang);
export const setAccessTokenToLocalStorage = (token: string) => {
	localStorage.setItem("access-token", token);
};

export const removeAccessTokenFromLocalStorage = () => localStorage.removeItem("access-token");
