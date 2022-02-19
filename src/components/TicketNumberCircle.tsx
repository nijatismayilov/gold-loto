interface Props {
	number: number;
	size: number;
}

const TicketNumberCircle: React.FC<Props> = (props) => {
	const { number, size } = props;

	return (
		<div
			className={`rounded-full bg-[#FFEFCA] border-[#B47B51] flex items-center justify-center font-medium leading-[100%] shadow-md`}
			style={{ height: size, width: size, fontSize: size / 2, borderWidth: size / 10 }}
		>
			{number}
		</div>
	);
};

export default TicketNumberCircle;
