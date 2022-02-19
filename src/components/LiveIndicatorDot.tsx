import styles from "styles/LiveIndicatorDot.module.css";

interface Props {
	size?: number;
}

const LiveIndicatorDot: React.FC<Props> = (props) => {
	const { size = 15 } = props;

	const ringringSize = Math.floor(size * 1.75);

	return (
		<div className={styles["ring-container"]}>
			<div className={styles["circle"]} style={{ width: size, height: size }}></div>
			<div
				className={styles["ringring"]}
				style={{
					width: ringringSize,
					height: ringringSize,
					borderWidth: Math.ceil(ringringSize / 9),
				}}
			></div>
		</div>
	);
};

export default LiveIndicatorDot;
