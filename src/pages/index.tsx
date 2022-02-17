import { selectIsUserProfileLoading } from "features/api";
import { selectUser } from "features/authSlice";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
	const user = useSelector(selectUser);
	const isLoading = useSelector(selectIsUserProfileLoading);

	return (
		<div>{isLoading ? <div>Loading...</div> : <pre>{JSON.stringify(user, null, 2)}</pre>}</div>
	);
};

// @ts-ignore
Home.auth = true;

export default Home;
