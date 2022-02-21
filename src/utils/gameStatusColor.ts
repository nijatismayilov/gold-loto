import { GameStatus } from "types/game";

export const GameStatusColor: { [key in GameStatus]: string } = {
	[GameStatus.waiting]: "green-600",
	[GameStatus.starting]: "yellow-600",
	[GameStatus.started]: "red-600",
};
