import AuthenticatedRoute from "components/AuthenticatedRoute";
import Footer from "components/Footer";
import Header from "components/Header";
import { authenticate } from "features/authSlice";
import type { NextComponentType } from "next";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "store";
import { LocalStorage } from "utils/local-storage";
import "../styles/globals.css";

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
