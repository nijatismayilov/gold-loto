import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit";
import { getLanguageFromLocalStorage, getAccessTokenFromLocalStorage } from "utils/localStorage";
import {
	ChangePasswordPayload,
	ChangePasswordResult,
	GetUserProfileResult,
	PasswordResetConfirmPayload,
	PasswordResetConfirmResult,
	PasswordResetPayload,
	PasswordResetResult,
	SignInPayload,
	SignInResult,
	SignUpPayload,
	UpdateUserProfilePayload,
	UpdateUserProfileResult,
	UploadImagePayload,
	UploadImageResult,
} from "./types";

/** API Slice */
export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: " http://185.164.32.199/gold/api",
		prepareHeaders: (headers) => {
			const token = getAccessTokenFromLocalStorage();

			headers.set("Authorization", `Bearer ${token}`);
			headers.set("Content-Type", "application/json");

			return headers;
		},
	}),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		login: builder.mutation<SignInResult, SignInPayload>({
			query: (payload) => ({
				url: "/login",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
			invalidatesTags: ["User"],
		}),

		getUserProfile: builder.query<GetUserProfileResult, void>({
			query: () => ({
				url: "/get-user-data",
				method: "POST",
				body: { lang: getLanguageFromLocalStorage() },
			}),
			providesTags: [{ type: "User" }],
		}),

		register: builder.mutation<SignInResult, SignUpPayload>({
			query: (payload) => ({
				url: "/register",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
			invalidatesTags: ["User"],
		}),

		uploadImage: builder.mutation<UploadImageResult, UploadImagePayload>({
			query: (payload) => {
				const body = new FormData();

				body.append("image", payload.image);
				body.append("lang", getLanguageFromLocalStorage());

				return {
					url: "/upload",
					method: "POST",
					body,
				};
			},
		}),

		updateUserProfile: builder.mutation<UpdateUserProfileResult, UpdateUserProfilePayload>({
			query: (payload) => ({
				url: "/update-profile",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
			invalidatesTags: ["User"],
		}),

		changePassword: builder.mutation<ChangePasswordResult, ChangePasswordPayload>({
			query: (payload) => ({
				url: "/change-password",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
			invalidatesTags: ["User"],
		}),

		passwordReset: builder.mutation<PasswordResetResult, PasswordResetPayload>({
			query: (payload) => ({
				url: "/password-reset",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
		}),

		passwordResetConfirm: builder.mutation<PasswordResetConfirmResult, PasswordResetConfirmPayload>(
			{
				query: (payload) => ({
					url: "/confirm-otp",
					method: "POST",
					body: { ...payload, lang: getLanguageFromLocalStorage() },
				}),
			}
		),
	}),
});

export const {
	useLoginMutation,
	useGetUserProfileQuery,
	useRegisterMutation,
	useUploadImageMutation,
	useUpdateUserProfileMutation,
	useChangePasswordMutation,
	usePasswordResetMutation,
	usePasswordResetConfirmMutation,
} = api;

const selectGetUserProfileResult = api.endpoints.getUserProfile.select();

export const selectIsUserProfileLoading = createSelector(
	selectGetUserProfileResult,
	(result) => result.isLoading
);
