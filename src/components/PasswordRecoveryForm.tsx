import { Language } from "features/localizationSlice";
import FormLayout from "components/FormLayout";
import { PASSWORD_RECOVERY_FORM } from "locales";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "components/LoadingButton";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";
import { PasswordResetPayload } from "features/types";
import TextField from "components/Textfield";
import { useRouter } from "next/router";
import {
	validationSchema,
	buildPasswordRecoveryErrorMessagges,
} from "form-validations/password-recovery-form";
import { usePasswordResetMutation } from "features/api";

const defaultValues: PasswordResetPayload = {
	username: "",
};

interface Props {
	language: Language;
	onResetPasswordSuccess: (username: string) => void;
}

const PasswordRecovery: React.FC<Props> = (props) => {
	const { language, onResetPasswordSuccess } = props;
	const router = useRouter();
	const [resetPassword, { isLoading: isResetPasswordLoading }] = usePasswordResetMutation();

	const TEXTS = PASSWORD_RECOVERY_FORM[language];
	const errorMessages = buildPasswordRecoveryErrorMessagges(TEXTS);

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
		trigger,
	} = methods;

	useRevalidateFormOnLangChange({ trigger });

	const onSubmit: SubmitHandler<PasswordResetPayload> = async (values) => {
		resetPassword(values)
			.unwrap()
			.then((res) => {
				res.result && onResetPasswordSuccess(values.username);
			});
	};

	return (
		<FormLayout title={TEXTS.formTitle}>
			<form className='w-full sm:w-[350px] mb-14' onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<TextField
						label={TEXTS.usernameLabel}
						{...register("username")}
						fullWidth
						helperText={errors.username ? errors.username.message : " "}
						error={!!errors.username}
					/>
				</div>

				<div className='mt-8'>
					<LoadingButton type='submit' isLoading={isResetPasswordLoading}>
						{TEXTS.submitButton}
					</LoadingButton>
				</div>
			</form>

			<span
				className='text-[20px] leading-6 px-3 rounded py-1 cursor-pointer mx-auto hover:bg-primary hover:text-white transition-all'
				onClick={() => router.push("/login")}
			>
				{TEXTS.haveAccount}
			</span>
		</FormLayout>
	);
};

export default PasswordRecovery;
