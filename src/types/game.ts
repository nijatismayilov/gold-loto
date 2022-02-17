import { TicketRow } from "./ticket";

export enum GameStatus {
	WAITING = 0,
	STARTING = 1,
	STARTED = 2,
}

export type Game = {
	id: number;
	price: number;
	percent: number;
	max_ticket: number;
	circulation: string;
	status: GameStatus;
	last_won: number;
	last_numbers: TicketRow;
	row_count: number;
};

export type PlayedGame = {
	circulation: string;
	ticket_numbers: string;
	price: number;
	won_amount: number;
	won: number;
	last_numbers: number[];
	last_won: number;
	created_at: Date;
};
