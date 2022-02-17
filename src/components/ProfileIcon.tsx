import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

const ProfileIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width='23'
			height='25'
			viewBox='0 0 23 25'
			fill='#000000'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M5.75 5.92105C5.75 9.18553 8.32983 11.8421 11.5 11.8421C14.6702 11.8421 17.25 9.18553 17.25 5.92105C17.25 2.65658 14.6702 0 11.5 0C8.32983 0 5.75 2.65658 5.75 5.92105ZM21.7222 25H23V23.6842C23 18.6066 18.9865 14.4737 14.0556 14.4737H8.94444C4.01222 14.4737 0 18.6066 0 23.6842V25H21.7222Z' />
		</svg>
	);
};

export default ProfileIcon;
