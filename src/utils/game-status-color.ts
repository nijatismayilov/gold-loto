import { GameStatus } from "types/game";

export const GameStatusColor: { [key in GameStatus]: string } = {
	[GameStatus.waiting]: "green-600",
	[GameStatus.starting]: "yellow-600",
	[GameStatus.started]: "red-600",
};

export const GameStatusBgColor: { [key in GameStatus]: string } = {
	[GameStatus.waiting]: `bg-${GameStatusColor[GameStatus.waiting]}`,
	[GameStatus.starting]: `bg-${GameStatusColor[GameStatus.starting]}`,
	[GameStatus.started]: `bg-${GameStatusColor[GameStatus.started]}`,
};
