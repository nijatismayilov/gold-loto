import { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";
import SignInForm from "components/SignInForm";
import LoginLayout from "components/LoginLayout";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<LoginLayout background={`bg-[url("../assets/bg-1.png")]`}>
			<SignInForm language={language} />
		</LoginLayout>
	);
};

export default Login;
