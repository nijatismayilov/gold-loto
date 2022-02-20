import { TicketRow } from "./ticket";

export enum GameStatus {
	waiting = 0,
	starting = 1,
	started = 2,
}

export type Game = {
	id: number;
	price: string;
	percent: string;
	max_ticket: number;
	circulation: string;
	status: GameStatus;
	last_won: string;
	last_numbers: TicketRow;
	row_count: number;
	time_left: [number, number];
	prize: string;
	playerCount: number;
};

export type GameListItem = Omit<Game, "percent" | "max_ticket" | "row_count">;

export type PlayedGame = {
	circulation: string;
	ticket_numbers: string;
	price: string;
	won_amount: string;
	won: number;
	last_numbers: number[];
	last_won: string;
	created_at: Date;
};
