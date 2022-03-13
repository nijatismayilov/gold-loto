import { useGetGamesQuery, useGetCampaignsQuery } from "features/api/endpoints/games";
import { CircularProgress } from "@mui/material";
import Game from "components/Game";
import { useEffect } from "react";

const Home: React.FC = () => {
	const { data: gamesResult, isLoading: isGamesLoading, ...rest } = useGetGamesQuery();
	const { data: campaigns, isLoading: isCampaignsLoading } = useGetCampaignsQuery();
	const games = gamesResult?.data;

	return (
		<div className='bg-4 py-24 px-3 min-h-screen'>
			{isGamesLoading ? (
				<div className='flex justify-center items-center'>
					<CircularProgress />
				</div>
			) : (
				<div className='container mx-auto'>
					<div className='flex flex-wrap -mx-1 md:-mx-3'>
						{games &&
							games.map((game) => (
								<div key={game.id} className='my-1 md:my-5 px-1 md:px-3 w-full md:w-1/2 2xl:w-1/2'>
									<Game game={game} />
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

// @ts-ignore
Home.auth = true;

export default Home;
