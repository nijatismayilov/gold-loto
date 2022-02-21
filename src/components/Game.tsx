import { GameListItem, GameStatus } from "types/game";
import { selectLanguage } from "features/localizationSlice";
import { useSelector } from "react-redux";
import { GAME } from "locales/index";
import PriceIndicator from "components/PriceIndicator";
import TicketNumberCircle from "components/TicketNumberCircle";
import { useMediaQuery } from "@mui/material";
import LiveIndicatorDot from "components/LiveIndicatorDot";
import MechanicalCounter from "components/MechanicalCounter";
import Counter from "components/Counter";
import { GameStatusColor } from "utils/gameStatusColor";

interface Props {
	game: GameListItem;
}

const Game: React.FC<Props> = (props) => {
	const { game } = props;
	const language = useSelector(selectLanguage);
	const TEXTS = GAME[language];
	const isSmallScreen = useMediaQuery("(max-width: 640px)");
	const isMediumScreen = useMediaQuery("(min-width: 641px) and (max-width: 960px)");

	const ticketNumberCircleSize = isSmallScreen ? 30 : isMediumScreen ? 36 : 48;
	const mechanicalCounterSpinner = isSmallScreen ? 12 : isMediumScreen ? 16 : 22;

	return (
		<div className='bg-accent rounded-xl flex flex-col'>
			<div className='flex flex-col px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4 pb-2 border-b-2 border-b-[#B47B51]'>
				<span className='text-[#434141] text-xs sm:text-base lg:text-lg leading-3 sm:leading-5 lg:leading-6 font-medium mb-2.5 sm:mb-4'>
					{TEXTS.circulation} &#8470;{game.circulation}
				</span>

				<div className='flex justify-between items-start mb-2.5'>
					<div className='flex sm:mb-4'>
						<div className='mr-1 sm:mr-2'>
							<PriceIndicator title={TEXTS.price} price={game.price} />
						</div>

						<PriceIndicator title={TEXTS.prize} price={game.prize} isPriceAnimating />
					</div>

					<div className='flex flex-col items-center'>
						<div
							className={`rounded-md text-[10px] sm:text-xs lg:text-base leading-[10px] sm:leading-3 lg:leading-4 font py-0.5 sm:py-1 px-3 sm:px-4 bg-${
								GameStatusColor[game.status]
							} text-white shadow-lg mb-2 sm:mb-3`}
						>
							{TEXTS.status[game.status]}
						</div>

						<span className='text-2xl sm:text-3xl lg:text-[44px] sm:leading-8 lg:leading-[52px] font-semibold text-[#434141] flex items-center'>
							<MechanicalCounter
								text={`${game.time_left[0]}`.padStart(2, "0")}
								spinnerSize={mechanicalCounterSpinner}
							/>

							<>:</>

							<MechanicalCounter
								text={`${game.time_left[1]}`.padStart(2, "0")}
								spinnerSize={mechanicalCounterSpinner}
							/>
						</span>
					</div>
				</div>

				<span className='text-[#434141] text-base sm:text-lg lg:text-2xl leading-4 sm:leading-5 lg:leading-6 font-medium flex items-center'>
					<Counter value={game.playerCount} fixedPoint={0} duration={0.75} />

					<span className='ml-1'>{TEXTS.players}</span>

					<div className='ml-2'>
						<LiveIndicatorDot size={10} />
					</div>
				</span>
			</div>

			<div className='p-3 sm:p-4 flex items-center justify-between'>
				<div className='flex flex-col'>
					<span className='text-xs sm:text-lg lg:text-2xl leading-4 sm:leading-5 lg:leading-7 font-medium mb-2 sm:mb-3'>
						{TEXTS.lastRow}
					</span>

					<div className='flex flex-wrap'>
						{game.last_numbers.map((number) => (
							<div key={number} className='mr-1 sm:mr-[6px]'>
								<TicketNumberCircle number={number} size={ticketNumberCircleSize} />
							</div>
						))}
					</div>
				</div>

				<PriceIndicator icon title={TEXTS.lastPrize} price={game.last_won} />
			</div>
		</div>
	);
};

export default Game;
