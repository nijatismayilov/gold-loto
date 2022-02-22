import LoginLayout from "components/LoginLayout";
import SignUpForm from "components/SignUpForm";
import { selectLanguage } from "features/localizationSlice";
import { FC } from "react";
import { useSelector } from "react-redux";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<LoginLayout background={`bg-2`}>
			<SignUpForm language={language} />
		</LoginLayout>
	);
};

export default Login;
