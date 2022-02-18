import { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";
import LoginLayout from "components/LoginLayout";
import PasswordRecoveryForm from "components/PasswordRecoveryForm";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<LoginLayout background={`bg-[url("../assets/bg-3.png")]`}>
			<PasswordRecoveryForm language={language} />
		</LoginLayout>
	);
};

export default Login;
