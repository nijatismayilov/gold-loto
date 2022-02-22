import { useGetUserProfileQuery } from "features/api/endpoints/auth";
import { selectIsAuthenticated } from "features/authSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface RedirectProps {
	redirectTo: string;
}

const Redirect: React.FC<RedirectProps> = (props) => {
	const { redirectTo } = props;
	const router = useRouter();

	useEffect(() => {
		router.push(redirectTo);
	}, [router, redirectTo]);

	return <div className='h-screen flex justify-center items-center'>...Redirecting</div>;
};

const AuthenticatedPageWrapper: React.FC = (props) => {
	useGetUserProfileQuery();

	return <>{props.children}</>;
};

interface Props {
	auth: boolean;
}

const AuthenticatedRoute: React.FC<Props> = (props) => {
	const { auth } = props;
	const isAuthenticated = useSelector(selectIsAuthenticated);

	if (auth) {
		return isAuthenticated ? (
			<AuthenticatedPageWrapper>{props.children}</AuthenticatedPageWrapper>
		) : (
			<Redirect redirectTo='/login' />
		);
	} else {
		return !isAuthenticated ? <>{props.children}</> : <Redirect redirectTo='/' />;
	}
};

export default AuthenticatedRoute;
