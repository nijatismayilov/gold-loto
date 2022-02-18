import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";
import LoginLayout from "components/LoginLayout";
import PasswordRecoveryForm from "components/PasswordRecoveryForm";
import { LocalStorage } from "utils/local-storage";
import OtpConfirmationForm from "components/OtpConfirmationForm";

export type FormView = "passwordRecovery" | "otp";

const Login: FC = () => {
	const language = useSelector(selectLanguage);
	const [formView, setFormView] = useState<FormView>("passwordRecovery");
	const [otpUsername, setOtpUsername] = useState(null);

	const handleResetPasswordSuccess = (username: string) => {
		setFormView("otp");
		setOtpUsername(username);

		LocalStorage.setPasswordRecoveryFormView("otp");
		LocalStorage.setPasswordRecoveryUsername(username);
	};

	const handleClose = () => {
		setFormView("passwordRecovery");

		LocalStorage.setPasswordRecoveryFormView("passwordRecovery");
		LocalStorage.setPasswordRecoveryUsername(null);
	};

	useEffect(() => {
		const view = LocalStorage.getPasswordRecoveryFormView();
		const username = LocalStorage.getPasswordRecoveryUsername();

		view === "otp" && setFormView("otp");
		username && setOtpUsername(username);
	}, []);

	return (
		<LoginLayout background={`bg-[url("../assets/bg-3.png")]`}>
			{formView === "passwordRecovery" && (
				<PasswordRecoveryForm
					language={language}
					onResetPasswordSuccess={handleResetPasswordSuccess}
				/>
			)}

			{formView === "otp" && (
				<OtpConfirmationForm language={language} username={otpUsername} onClose={handleClose} />
			)}
		</LoginLayout>
	);
};

export default Login;