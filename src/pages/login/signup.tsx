import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";
import SignUpForm from "components/SignUpForm";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<div className='bg-[url("../assets/bg-2.png")] bg-no-repeat bg-cover bg-center flex justify-center py-[100px]'>
			<SignUpForm language={language} />
		</div>
	);
};

export default Login;
