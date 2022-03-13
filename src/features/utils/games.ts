import { Recipe } from "@reduxjs/toolkit/dist/query/core/buildThunks";
import { GetGamesResult } from "features/types";
import { getRandomFloat, getRandomInt } from "utils/random";

type GamesRecipe = Recipe<GetGamesResult>;

interface GamesRecipesInterface {
	updateTimer: () => GamesRecipe;
	updatePrize: (gameId: number) => GamesRecipe;
	updatePlayerCount: (gameId: number) => GamesRecipe;
}

export const GamesRecipes: GamesRecipesInterface = {
	updateTimer: () => (draft) => {
		draft.data.forEach((game) => {
			if (game.time_left[1] === 0) {
				if (game.time_left[0] === 0) {
					return;
				}
				game.time_left[0]--;
				game.time_left[1] = 59;
			} else {
				game.time_left[1]--;
			}
		});
	},

	updatePrize: (gameId) => (draft) => {
		const game = draft.data.find((game) => +game.id === gameId);
		const index = draft.data.indexOf(game);

		if (game) {
			const prize = +game.prize;
			const newPrize = prize + +getRandomFloat(0, 2);
			game.prize = newPrize.toFixed(2);
			draft.data[index] = game;
		}
	},

	updatePlayerCount: (gameId) => (draft) => {
		const game = draft.data.find((game) => +game.id === gameId);
		const index = draft.data.indexOf(game);

		if (game) {
			game.playerCount += getRandomInt(1, 20);
			draft.data[index] = game;
		}
	},
};
