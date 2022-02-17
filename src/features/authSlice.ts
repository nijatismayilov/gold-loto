import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import { UserProfile } from "types/user";
import {
	removeAccessTokenFromLocalStorage,
	setAccessTokenToLocalStorage,
} from "utils/localStorage";
import { authApi } from "./authApi";

export type AuthState = {
	isAuthenticated: boolean;
	user?: UserProfile;
};

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authenticate: (state, action: PayloadAction<string>) => {
			state.isAuthenticated = true;

			setAccessTokenToLocalStorage(action.payload);
		},
		setUser: (state, action: PayloadAction<UserProfile>) => {
			state.user = action.payload;
		},
		flushAuth: (state) => {
			state.isAuthenticated = false;
			state.user = null;

			setAccessTokenToLocalStorage("");
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
			const { token, result } = action.payload;

			if (result) {
				state.isAuthenticated = true;

				setAccessTokenToLocalStorage(token);
			}
		});
		builder.addMatcher(authApi.endpoints.getUserProfile.matchFulfilled, (state, action) => {
			const { result, data } = action.payload;

			if (result) {
				state.user = data;
			}
		});
		builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
			const { token, result } = action.payload;

			if (result) {
				state.isAuthenticated = true;

				setAccessTokenToLocalStorage(token);
			}
		});
	},
});

export const { flushAuth, authenticate, setUser } = authSlice.actions;

const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector([selectAuth], (auth) => auth.isAuthenticated);

export const selectUser = createSelector([selectAuth], (auth) => auth.user);
