import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "@reduxjs/toolkit";
import { LocalStorage } from "utils/local-storage";
import {
	ChangePasswordPayload,
	ChangePasswordResult,
	GetCampaignsResult,
	GetGameByIdPayload,
	GetGameByIdResult,
	GetGamesResult,
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

const getRandomFloat = (min: number, max: number) => {
	return (Math.random() * (max - min) + min).toFixed(2);
};

const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/** API Slice */
export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: " http://185.164.32.199/gold/api",
		prepareHeaders: (headers) => {
			const token = LocalStorage.getAccessToken();

			headers.set("Authorization", `Bearer ${token}`);
			headers.set("Content-Type", "application/json");

			return headers;
		},
	}),
	tagTypes: ["User", "Game", "Campaign"],
	endpoints: (builder) => ({
		login: builder.mutation<SignInResult, SignInPayload>({
			query: (payload) => ({
				url: "/login",
				method: "POST",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
			invalidatesTags: ["User"],
		}),

		getUserProfile: builder.query<GetUserProfileResult, void>({
			query: () => ({
				url: "/get-user-data",
				method: "POST",
				body: { lang: LocalStorage.getLanguage() },
			}),
			providesTags: [{ type: "User" }],
		}),

		register: builder.mutation<SignInResult, SignUpPayload>({
			query: (payload) => ({
				url: "/register",
				method: "POST",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
			invalidatesTags: ["User"],
		}),

		uploadImage: builder.mutation<UploadImageResult, UploadImagePayload>({
			query: (payload) => {
				const body = new FormData();

				body.append("image", payload.image);
				body.append("lang", LocalStorage.getLanguage());

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
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
			invalidatesTags: ["User"],
		}),

		changePassword: builder.mutation<ChangePasswordResult, ChangePasswordPayload>({
			query: (payload) => ({
				url: "/change-password",
				method: "POST",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
			invalidatesTags: ["User"],
		}),

		passwordReset: builder.mutation<PasswordResetResult, PasswordResetPayload>({
			query: (payload) => ({
				url: "/password-reset",
				method: "POST",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
		}),

		passwordResetConfirm: builder.mutation<PasswordResetConfirmResult, PasswordResetConfirmPayload>(
			{
				query: (payload) => ({
					url: "/confirm-otp",
					method: "POST",
					body: { ...payload, lang: LocalStorage.getLanguage() },
				}),
			}
		),

		getGames: builder.query<GetGamesResult, void>({
			query: () => ({
				url: "/games",
				method: "GET",
			}),
			providesTags: [{ type: "Game", id: "LIST" }],
			transformResponse: (response: GetGamesResult) => {
				const data = response.data.map((game) => ({
					...game,
					time_left: (+game.id === 1 ? [3, 50] : [1, 17]) as [number, number],
					prize: getRandomFloat(0, 10),
				}));

				return {
					...response,
					data,
				} as GetGamesResult;
			},
			onCacheEntryAdded: async (_arg, options) => {
				const { updateCachedData, cacheDataLoaded, cacheEntryRemoved } = options;

				let intervalId: NodeJS.Timer;
				let incrementInterval: NodeJS.Timer;
				let incrementIntervalTiming: number = 1000;

				try {
					await cacheDataLoaded;

					const listener = (gameId: number) => {
						updateCachedData((draft) => {
							const game = draft.data.find((game) => +game.id === gameId);
							const index = draft.data.indexOf(game);

							if (game) {
								if (game.time_left[1] === 0) {
									if (game.time_left[0] === 0) {
										return;
									}

									game.time_left[0]--;
									game.time_left[1] = 59;
								} else {
									game.time_left[1]--;
								}

								draft.data[index] = game;
							}
						});
					};

					const incrementPrize = (gameId: number) => {
						console.log("fired here", gameId);

						updateCachedData((draft) => {
							const game = draft.data.find((game) => +game.id === gameId);
							const index = draft.data.indexOf(game);

							if (game) {
								const prize = +game.prize;
								const newPrize = prize + +getRandomFloat(0, 2);
								game.prize = newPrize.toFixed(2);
								draft.data[index] = game;
							}
						});
					};

					intervalId = setInterval(() => {
						listener(1);
						listener(2);
					}, 1000);

					const incrementIntervalFunc = () => {
						incrementPrize(getRandomInt(1, 2));

						clearInterval(incrementInterval);

						incrementIntervalTiming = +getRandomFloat(0, 3000);

						incrementInterval = setInterval(incrementIntervalFunc, incrementIntervalTiming);
					};

					incrementIntervalFunc();
				} catch (_error) {}

				await cacheEntryRemoved;

				clearInterval(intervalId);
				clearInterval(incrementInterval);
			},
		}),

		getGameById: builder.query<GetGameByIdResult, GetGameByIdPayload>({
			query: (payload) => ({
				url: `/get-game-by-id`,
				method: "GET",
				body: { ...payload, lang: LocalStorage.getLanguage() },
			}),
			providesTags: (result) => (result ? [{ type: "Game", id: result.data.id }] : []),
		}),

		getCampaigns: builder.query<GetCampaignsResult, void>({
			query: () => ({
				url: "/campaigns",
				method: "GET",
			}),
			providesTags: [{ type: "Campaign", id: "LIST" }],
		}),
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
	useGetGamesQuery,
	useGetGameByIdQuery,
	useGetCampaignsQuery,
} = api;

const selectGetUserProfileResult = api.endpoints.getUserProfile.select();

export const selectIsUserProfileLoading = createSelector(
	selectGetUserProfileResult,
	(result) => result.isLoading
);
