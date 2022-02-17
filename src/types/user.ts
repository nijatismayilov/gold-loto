export type UserProfile = {
	id: number;
	username: string;
	full_name: string;
	phone: string;
	email: string;
	balance: number;
	bonus: number;
	pin?: string;
	document_photo?: string;
};
