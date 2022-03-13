import { configureStore, isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { api } from "features/api";
import { authSlice, flushAuth } from "features/authSlice";
import { localizationSlice } from "features/localizationSlice";
import { UNAUTHORIZED } from "locales";
import toast, { ToastOptions } from "react-hot-toast";
import { LocalStorage } from "utils/local-storage";
import { IoIosWarning } from "react-icons/io";

const warningToastId = "WARNING-TOAST";
const warningToastOptions: ToastOptions = {
	id: warningToastId,
	icon: <IoIosWarning className='!h-[25px] !w-[25px]' color='#eab308' />,
};

const errorHandler: Middleware = (api) => (next) => (action) => {
	if (action.payload?.message) {
		action.payload.result
			? toast.success(action.payload.message)
			: toast.error(action.payload.message);
	}

	if (isRejectedWithValue(action)) {
		if (action.payload.status === 401) {
			const lang = LocalStorage.getLanguage();
			const message = UNAUTHORIZED[lang].error;

			toast.error(message, warningToastOptions);

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
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), errorHandler, api.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
