import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {}

const PriceIcon: React.FC<Props> = (props) => {
	return (
		<svg
			width='29'
			height='29'
			viewBox='0 0 29 29'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M2.875 4.8125C2.875 4.29864 3.07913 3.80583 3.44248 3.44248C3.80583 3.07913 4.29864 2.875 4.8125 2.875H24.1875C24.7014 2.875 25.1942 3.07913 25.5575 3.44248C25.9209 3.80583 26.125 4.29864 26.125 4.8125V24.1875C26.125 24.7014 25.9209 25.1942 25.5575 25.5575C25.1942 25.9209 24.7014 26.125 24.1875 26.125H4.8125C4.29864 26.125 3.80583 25.9209 3.44248 25.5575C3.07913 25.1942 2.875 24.7014 2.875 24.1875V4.8125Z'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1.5835 14.5H27.4168'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 27.4173V1.58398'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.875 18.375V10.625'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M26.125 18.375V10.625'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M18.375 26.125H10.625'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M18.375 2.875H10.625'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.5 14.5015C14.5 14.5015 19.6002 12.2114 20.3765 11.4357C20.7492 11.063 20.9586 10.5575 20.9586 10.0304C20.9586 9.50331 20.7492 8.99779 20.3765 8.62508C20.0038 8.25236 19.4983 8.04297 18.9712 8.04297C18.444 8.04297 17.9385 8.25236 17.5658 8.62508C16.7902 9.40137 14.5 14.5015 14.5 14.5015ZM14.5 14.5015C14.5 14.5015 9.3999 16.7916 8.62361 17.5673C8.43906 17.7518 8.29267 17.9709 8.19279 18.2121C8.09291 18.4532 8.0415 18.7116 8.0415 18.9726C8.0415 19.2336 8.09291 19.4921 8.19279 19.7332C8.29267 19.9743 8.43906 20.1934 8.62361 20.378C8.80816 20.5625 9.02726 20.7089 9.26838 20.8088C9.50951 20.9087 9.76795 20.9601 10.0289 20.9601C10.2899 20.9601 10.5484 20.9087 10.7895 20.8088C11.0306 20.7089 11.2497 20.5625 11.4343 20.378C12.2099 19.6017 14.5 14.5015 14.5 14.5015Z'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15.096 15.0959C15.096 15.0959 16.9985 19.3328 17.6429 19.9777C17.9525 20.2873 18.3725 20.4612 18.8104 20.4612C19.2483 20.4612 19.6682 20.2873 19.9778 19.9777C20.2875 19.668 20.4614 19.2481 20.4614 18.8102C20.4614 18.3723 20.2875 17.9524 19.9778 17.6427C19.3329 16.9984 15.096 15.0959 15.096 15.0959ZM15.096 15.0959C15.096 15.0959 13.1935 10.8589 12.5492 10.2141C12.3959 10.0607 12.2139 9.93912 12.0135 9.85615C11.8132 9.77317 11.5985 9.73047 11.3817 9.73047C11.1649 9.73047 10.9502 9.77317 10.7499 9.85615C10.5496 9.93912 10.3676 10.0607 10.2142 10.2141C10.0609 10.3674 9.93931 10.5494 9.85633 10.7497C9.77336 10.95 9.73066 11.1647 9.73066 11.3815C9.73066 11.5983 9.77336 11.813 9.85633 12.0133C9.93931 12.2137 10.0609 12.3957 10.2142 12.549C10.8591 13.1934 15.096 15.0959 15.096 15.0959Z'
				stroke='black'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default PriceIcon;