import { CircularProgress } from "@mui/material";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

const LoadingButton: React.FC<Props> = (props) => {
	const { isLoading, ...rest } = props;

	return (
		<button
			type='submit'
			className='bg-primary py-[10px] w-full text-center text-white font-semibold text-2xl rounded active:scale-[97.5%] transition-all relative'
			disabled={isLoading}
			{...rest}
		>
			{isLoading && (
				<div className='w-full h-full rounded bg-[#ffffff96] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
					<CircularProgress size={32} />
				</div>
			)}
			{props.children}
		</button>
	);
};

export default LoadingButton;
