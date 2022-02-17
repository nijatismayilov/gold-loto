import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserProfile } from "types/user";
import { getLanguageFromLocalStorage, getAccessTokenFromLocalStorage } from "utils/localStorage";

/** Payload types */
export type SignInPayload = {
	username: string;
	password: string;
};

export type SignUpPayload = {
	username: string;
	password: string;
	phone: string;
	full_name: string;
	email: string;
	birthday: string;
	is_mobile: boolean;
	referal_id: number;
};

export type UploadImagePayload = {
	image: File;
};

export type UpdateUserProfilePayload = {
	username: string;
	email: string;
	pin: string;
	document_photo: string;
};

export type ChangePasswordPayload = {
	old_password: string;
	new_password: string;
};

export type PasswordResetPayload = {
	username: string;
};

export type PasswordResetConfirmPayload = {
	username: string;
	reset_code: string;
	new_password: string;
};

/** Result types */
export type SignInResult = {
	result: boolean;
	message: string;
	token: string;
};

export type GetUserProfileResult = {
	result: boolean;
	message: string;
	data: UserProfile;
};

export type UploadImageResult = {
	result: boolean;
	message: string;
};

export type UpdateUserProfileResult = {
	result: boolean;
	message: string;
};

export type ChangePasswordResult = {
	result: boolean;
	message: string;
};

export type PasswordResetResult = {
	result: boolean;
	message: string;
};

export type PasswordResetConfirmResult = {
	result: boolean;
	message: string;
};

/** API Slice */
export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: " http://185.164.32.199/gold/api",
		prepareHeaders: (headers) => {
			const token = getAccessTokenFromLocalStorage();

			headers.set("Authorization", `Bearer ${token}`);
			headers.set("Content-Type", "application/json");

			return headers;
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<SignInResult, SignInPayload>({
			query: (payload: SignInPayload) => ({
				url: "/login",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
		}),

		getUserProfile: builder.query<GetUserProfileResult, void>({
			query: () => ({
				url: "/get-user-data",
				method: "POST",
				body: { lang: getLanguageFromLocalStorage() },
			}),
		}),

		register: builder.mutation<SignInResult, SignUpPayload>({
			query: (payload: SignUpPayload) => ({
				url: "/register",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
		}),

		uploadImage: builder.mutation<UploadImageResult, UploadImagePayload>({
			query: (payload: UploadImagePayload) => {
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
			query: (payload: UpdateUserProfilePayload) => ({
				url: "/update-profile",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
		}),

		changePassword: builder.mutation<ChangePasswordResult, ChangePasswordPayload>({
			query: (payload: ChangePasswordPayload) => ({
				url: "/change-password",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
		}),

		passwordReset: builder.mutation<PasswordResetResult, PasswordResetPayload>({
			query: (payload: PasswordResetPayload) => ({
				url: "/password-reset",
				method: "POST",
				body: { ...payload, lang: getLanguageFromLocalStorage() },
			}),
		}),

		passwordResetConfirm: builder.mutation<PasswordResetConfirmResult, PasswordResetConfirmPayload>(
			{
				query: (payload: PasswordResetConfirmPayload) => ({
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
} = authApi;
