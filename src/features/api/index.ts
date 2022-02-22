import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LocalStorage } from "utils/local-storage";

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
	endpoints: () => ({}),
});
