import PrizeIcon from "components/PrizeIcon";
import { useMediaQuery } from "@mui/material";
import Counter from "components/Counter";

interface Props {
	title: string;
	price: string;
	icon?: boolean;
	isPriceAnimating?: boolean;
}

const PriceIndicator: React.FC<Props> = (props) => {
	const { title, price, icon = false, isPriceAnimating = false } = props;
	const isSmallScreen = useMediaQuery("(max-width: 640px)");
	const isMediumScreen = useMediaQuery("(min-width: 641px) and (max-width: 960px)");

	return (
		<div className='bg-[#FFEFCA] rounded-xl shadow-md sm:shadow-lg py-1 md:py-2 px-2 sm:px-3 flex flex-col'>
			<div className='flex items-center text-xs sm:text-base lg:text-lg leading-3 sm:leading-5 lg:leading-6 font-semibold text-black mb-1'>
				{title}

				{icon && (
					<div className='ml-1'>
						<PrizeIcon height={isSmallScreen ? 14 : isMediumScreen ? 20 : 24} />
					</div>
				)}
			</div>

			<div className='flex items-center justify-center text-lg sm:text-2xl lg:text-3xl leading-5 sm:leading-7 lg:leading-9 text-black font-normal'>
				{isPriceAnimating ? <Counter value={+price} /> : price}

				<span className='ml-1 sm:ml-2'>&#8380;</span>
			</div>
		</div>
	);
};

export default PriceIndicator;
