import LoginLayout from "components/LoginLayout";
import SignInForm from "components/SignInForm";
import { selectLanguage } from "features/localizationSlice";
import { FC } from "react";
import { useSelector } from "react-redux";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<LoginLayout background={`bg-1`}>
			<SignInForm language={language} />
		</LoginLayout>
	);
};

export default Login;
