import { CircularProgress } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { MechanicalCounter as MechanicalCounterComponent } from "mechanical-counter";
import { useWindowSize } from "@reach/window-size";

interface Props {
	text: string | number;
	spinnerSize: number;
}

const MechanicalCounter: React.FC<Props> = (props) => {
	const { text, spinnerSize = 24 } = props;
	const [showCounter, setShowCounter] = useState(false);
	const componentKey = useRef(Math.random());
	const { width: windowWidth } = useWindowSize();

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowCounter(true);
		}, 1000);

		componentKey.current = Math.random();

		return () => {
			setShowCounter(false);
			clearTimeout(timeout);
		};
	}, [windowWidth]);

	return (
		<div key={componentKey.current} className='relative'>
			<div style={{ opacity: showCounter ? 1 : 0, transition: "all 250ms ease" }}>
				<MechanicalCounterComponent text={text} />
			</div>

			{!showCounter && (
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<CircularProgress size={spinnerSize} />
				</div>
			)}
		</div>
	);
};

export default MechanicalCounter;
