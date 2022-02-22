import {
	GetCampaignsResult,
	GetGameByIdPayload,
	GetGameByIdResult,
	GetGamesResult,
} from "features/types";
import { updatePlayerCount, updatePrize, updateTimer } from "features/utils/games";
import { GameListItem } from "types/game";
import { LocalStorage } from "utils/local-storage";
import { getRandomFloat, getRandomInt } from "utils/random";
import { Timer } from "utils/timer";
import { api } from "..";

/** GAMES Endpoints */
export const gamesEndpoints = api.injectEndpoints({
	endpoints: (builder) => ({
		getGames: builder.query<GetGamesResult, void>({
			query: () => ({
				url: "/games",
				method: "GET",
			}),
			providesTags: [{ type: "Game", id: "LIST" }],
			transformResponse: (response: GetGamesResult) => {
				const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map<GameListItem>((id) => ({
					...response.data[getRandomInt(0, 1)],
					time_left: [getRandomInt(0, 5), getRandomInt(0, 59)] as [number, number],
					prize: getRandomFloat(0, 10).toFixed(2),
					playerCount: getRandomInt(1, 27),
					id,
					status: getRandomInt(0, 2),
				}));

				return {
					...response,
					data,
				} as GetGamesResult;
			},
			onCacheEntryAdded: async (_arg, options) => {
				const { updateCachedData, cacheDataLoaded, cacheEntryRemoved } = options;

				const countdownTimer = new Timer(() => updateCachedData(updateTimer), 1000);
				const incrementPrizeTimer = new Timer(
					() => updateCachedData(updatePrize(getRandomInt(1, 10))),
					150
				);
				const incrementPlayerCountTimer = new Timer(
					() => updateCachedData(updatePlayerCount(getRandomInt(1, 10))),
					250
				);

				try {
					const res = await cacheDataLoaded;

					if (res.data.result) {
						countdownTimer.start();
						incrementPrizeTimer.start();
						incrementPlayerCountTimer.start();
					}
				} catch (_error) {}

				await cacheEntryRemoved;

				countdownTimer.stop();
				incrementPrizeTimer.stop();
				incrementPlayerCountTimer.stop();
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

export const { useGetGamesQuery, useGetGameByIdQuery, useGetCampaignsQuery } = gamesEndpoints;
