import { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";
import SignInForm from "components/SignInForm";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<div className='bg-[url("../assets/bg-1.png")] bg-no-repeat bg-cover bg-center flex justify-center py-[100px] pb-[450px]'>
			<SignInForm language={language} />
		</div>
	);
};

export default Login;
