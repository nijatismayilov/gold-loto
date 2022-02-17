import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import { localizationSlice } from "features/localizationSlice";
import { authApi } from "features/authApi";
import { authSlice, flushAuth } from "features/authSlice";
import toast from "react-hot-toast";
import { UNAUTHORIZED } from "locales";
import { getLanguageFromLocalStorage } from "utils/localStorage";

const errorHandler = (api) => (next) => (action) => {
	if (action.payload?.message) {
		action.payload.result
			? toast.success(action.payload.message)
			: toast.error(action.payload.message);
	}

	if (isRejectedWithValue(action)) {
		if (action.payload.status === 401) {
			const lang = getLanguageFromLocalStorage();
			const message = UNAUTHORIZED[lang].error;

			toast.error(message);
			api.dispatch(flushAuth());
		}
	}

	next(action);
};

export const store = configureStore({
	devTools: process.env.NODE_ENV !== "production",
	reducer: {
		[localizationSlice.name]: localizationSlice.reducer,
		[authSlice.name]: authSlice.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		authApi.middleware,
		errorHandler,
	],
});

export type RootState = ReturnType<typeof store.getState>;