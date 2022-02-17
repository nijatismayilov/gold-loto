export enum TransactionDirection {
	OUTFLOW = 0,
	INFLOW = 1,
}

export enum TransactionPaymentType {
	BALANCE = 0,
	BONUS = 1,
}

export type Transaction = {
	id: number;
	user_id: number;
	amount: number;
	direction: TransactionDirection;
	payment_type: TransactionPaymentType;
	created_at: Date;
};
