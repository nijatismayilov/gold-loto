import { FC } from "react";

interface Props {
	background: string;
}

const LoginLayout: FC<Props> = (props) => {
	const { background, children } = props;

	return (
		<div
			className={`${background} bg-no-repeat bg-cover bg-center flex justify-center py-[100px] pb-[450px]`}
		>
			{children}
		</div>
	);
};

export default LoginLayout;
