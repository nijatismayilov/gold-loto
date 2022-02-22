import LoginLayout from "components/LoginLayout";
import OtpConfirmationForm from "components/OtpConfirmationForm";
import PasswordRecoveryForm from "components/PasswordRecoveryForm";
import { selectLanguage } from "features/localizationSlice";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LocalStorage } from "utils/local-storage";

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
		<LoginLayout background={`bg-3`}>
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
