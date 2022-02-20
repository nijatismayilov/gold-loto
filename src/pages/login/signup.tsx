import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";
import SignUpForm from "components/SignUpForm";
import LoginLayout from "components/LoginLayout";

const Login: FC = () => {
	const language = useSelector(selectLanguage);

	return (
		<LoginLayout background={`bg-2`}>
			<SignUpForm language={language} />
		</LoginLayout>
	);
};

export default Login;
