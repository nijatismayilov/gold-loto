import { yupResolver } from "@hookform/resolvers/yup";
import FormLayout from "components/FormLayout";
import LoadingButton from "components/LoadingButton";
import PasswordField from "components/PasswordField";
import TextField from "components/Textfield";
import { usePasswordResetConfirmMutation } from "features/api/endpoints/auth";
import { Language } from "features/localizationSlice";
import { buildOtpConfirmErrorMessagges, validationSchema } from "form-validations/otp-confirm-form";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";
import { OTP_CONFIRM_FORM } from "locales";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { buildOtpConfirmPayload } from "request-payload-builders/otp-confirm-form";
import { LocalStorage } from "utils/local-storage";

export type OtpConfirmFormValues = {
	username: string;
	otp: string;
	newPassword: string;
	confirmNewPassword: string;
};

const defaultValues: OtpConfirmFormValues = {
	username: "",
	otp: "",
	newPassword: "",
	confirmNewPassword: "",
};

interface Props {
	username: string;
	language: Language;
	onClose: () => void;
}

const OtpConfirmationForm: React.FC<Props> = (props) => {
	const { language, username, onClose } = props;
	const router = useRouter();
	const [confirmOtp, { isLoading: isOtpConfirmLoading }] = usePasswordResetConfirmMutation();
	const TEXTS = OTP_CONFIRM_FORM[language];

	const errorMessages = buildOtpConfirmErrorMessagges(TEXTS);

	const methods = useForm({
		defaultValues,
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: yupResolver(validationSchema(errorMessages)),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		trigger,
	} = methods;

	useRevalidateFormOnLangChange({ trigger });

	const onSubmit: SubmitHandler<OtpConfirmFormValues> = async (values) => {
		const payload = buildOtpConfirmPayload(values);

		confirmOtp(payload)
			.unwrap()
			.then((res) => {
				if (res.result) {
					LocalStorage.setPasswordRecoveryFormView("passwordRecovery");

					router.push("/login");
				}
			});
	};

	useEffect(() => {
		setValue("username", username);
	}, [setValue, username]);

	return (
		<FormLayout title={TEXTS.formTitle}>
			<form className='mb-14' onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<TextField label={TEXTS.usernameLabel} {...register("username")} fullWidth disabled />
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.otpLabel}
						{...register("otp")}
						fullWidth
						helperText={errors.otp ? errors.otp.message : " "}
						error={!!errors.otp}
					/>
				</div>

				<div className='mb-4'>
					<PasswordField
						label={TEXTS.newPasswordLabel}
						{...register("newPassword")}
						fullWidth
						helperText={errors.newPassword ? errors.newPassword.message : " "}
						error={!!errors.newPassword}
					/>
				</div>

				<div className='mb-4'>
					<PasswordField
						label={TEXTS.confirmNewPasswordLabel}
						{...register("confirmNewPassword")}
						fullWidth
						helperText={errors.confirmNewPassword ? errors.confirmNewPassword.message : " "}
						error={!!errors.confirmNewPassword}
					/>
				</div>

				<div className='mt-8'>
					<LoadingButton type='submit' isLoading={isOtpConfirmLoading}>
						{TEXTS.submitButton}
					</LoadingButton>
				</div>
			</form>

			<div className='flex justify-center'>
				<span
					className='text-[20px] leading-6 px-3 rounded py-1 cursor-pointer mx-auto hover:bg-primary hover:text-white transition-all'
					onClick={onClose}
				>
					{TEXTS.passwordRecovery}
				</span>

				<span
					className='text-[20px] leading-6 px-3 rounded py-1 cursor-pointer mx-auto hover:bg-primary hover:text-white transition-all'
					onClick={() => router.push("/login")}
				>
					{TEXTS.haveAccount}
				</span>
			</div>
		</FormLayout>
	);
};

export default OtpConfirmationForm;
