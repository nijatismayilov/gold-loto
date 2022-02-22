import { useGetGamesQuery, useGetCampaignsQuery } from "features/api/endpoints/games";
import { selectIsUserProfileLoading } from "features/api/endpoints/auth";
import { selectUser } from "features/authSlice";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Game from "components/Game";

const Home: React.FC = () => {
	const user = useSelector(selectUser);
	const isLoading = useSelector(selectIsUserProfileLoading);
	const { data: games, isLoading: isGamesLoading } = useGetGamesQuery();
	const { data: campaigns, isLoading: isCampaignsLoading } = useGetCampaignsQuery();

	return (
		<main>
			<div className='bg-[#fcfaf8] py-24 px-3 min-h-screen'>
				{isGamesLoading ? (
					<div className='flex justify-center items-center'>
						<CircularProgress />
					</div>
				) : (
					<div className='container mx-auto'>
						<div className='flex flex-wrap -mx-1 md:-mx-3'>
							{games &&
								games.data.map((game) => (
									<div
										key={game.id}
										className='my-1 md:my-5 px-1 md:px-3 w-full md:w-1/2 2xl:w-1/2'
									>
										<Game game={game} />
									</div>
								))}
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

// @ts-ignore
Home.auth = true;

export default Home;
