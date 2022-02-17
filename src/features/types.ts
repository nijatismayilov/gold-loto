import { UserProfile } from "types/user";

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
	data?: UserProfile;
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
