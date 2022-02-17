import { useGetUserProfileQuery } from "features/authApi";
import { selectUser } from "features/authSlice";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
	const { isLoading, error } = useGetUserProfileQuery();
	const user = useSelector(selectUser);

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error!</div>
			) : (
				<pre>{JSON.stringify(user, null, 2)}</pre>
			)}
		</div>
	);
};

// @ts-ignore
Home.auth = true;

export default Home;
