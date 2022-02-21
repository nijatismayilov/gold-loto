import { selectIsUserProfileLoading, useGetGamesQuery, useGetCampaignsQuery } from "features/api";
import { selectUser } from "features/authSlice";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Game from "components/Game";
import { useEffect } from "react";

const container = "flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-2 xl:-mx-2";
const col =
	"my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3";

const Home: React.FC = () => {
	const user = useSelector(selectUser);
	const isLoading = useSelector(selectIsUserProfileLoading);
	const { data: games, isLoading: isGamesLoading } = useGetGamesQuery();
	const { data: campaigns, isLoading: isCampaignsLoading } = useGetCampaignsQuery();

	return (
		<main>
			<div className='bg-4 py-24 px-3 min-h-screen'>
				{isGamesLoading ? (
					<CircularProgress />
				) : (
					<div className='container mx-auto'>
						<div className='flex flex-wrap -mx-1 overflow-hidden'>
							{games &&
								games.data.map((game) => (
									<div
										key={game.id}
										className='my-1 px-1 w-full overflow-hidden md:w-1/2 2xl:w-1/3'
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
