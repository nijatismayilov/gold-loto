import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import Header from "components/Header";
import Footer from "components/Footer";
import { Toaster } from "react-hot-toast";
import type { NextComponentType } from "next";
import AuthenticatedRoute from "components/AuthenticatedRoute";
import { useEffect } from "react";
import "../styles/globals.css";
import { LocalStorage } from "utils/local-storage";
import { authenticate } from "features/authSlice";

type CustomAppProps = AppProps & {
	Component: NextComponentType & { auth?: boolean };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
	useEffect(() => {
		const token = LocalStorage.getAccessToken();

		if (token) {
			store.dispatch(authenticate(token));
		}
	}, []);

	return (
		<Provider store={store}>
			<Header />
			<AuthenticatedRoute auth={Component.auth || false}>
				<Component {...pageProps} />
			</AuthenticatedRoute>
			<Toaster />
			<Footer />
		</Provider>
	);
}

export default MyApp;
