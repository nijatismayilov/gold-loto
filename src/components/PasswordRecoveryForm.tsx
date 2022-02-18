import { useState } from "react";
import { Language } from "features/localizationSlice";
import FormLayout from "components/FormLayout";
import { PASSWORD_RECOVERY_FORM } from "locales";

export type FormView = "passwordRecovery" | "otp";

interface Props {
	language: Language;
}

const PasswordRecovery: React.FC<Props> = (props) => {
	const { language } = props;
	const [formView, setFormView] = useState<FormView>("passwordRecovery");
	const TEXTS = PASSWORD_RECOVERY_FORM[language];

	return <FormLayout title={TEXTS.formTitle[formView]}></FormLayout>;
};

export default PasswordRecovery;
