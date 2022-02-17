import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { setLanguageToLocalStorage } from "utils/localStorage";

export type Language = "az" | "en" | "ru";

export type LocalizationState = {
	language: Language;
};

const initialState: LocalizationState = {
	language: "az",
};

export const localizationSlice = createSlice({
	name: "localization",
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<Language>) => {
			state.language = action.payload;

			setLanguageToLocalStorage(action.payload);
		},
	},
});

export const { setLanguage } = localizationSlice.actions;

const selectLocalization = (state: RootState) => state.localization;

export const selectLanguage = createSelector(
	[selectLocalization],
	(localization) => localization.language
);
