import { yupResolver } from "@hookform/resolvers/yup";
import FormLayout from "components/FormLayout";
import LoadingButton from "components/LoadingButton";
import PasswordField from "components/PasswordField";
import TextField from "components/Textfield";
import { useLoginMutation } from "features/api/endpoints/auth";
import { Language } from "features/localizationSlice";
import { SignInPayload } from "features/types";
import { buildSignInErrorMessages, validationSchema } from "form-validations/signin-form";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";
import { SIGNIN_FORM } from "locales";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
	language: Language;
}

const SignInForm: React.FC<Props> = (props) => {
	const { language } = props;
	const TEXTS = SIGNIN_FORM[language];
	const [login, { isLoading: isLoginLoading }] = useLoginMutation();
	const router = useRouter();
	const errorMessages = buildSignInErrorMessages(TEXTS);

	const methods = useForm<SignInPayload>({
		defaultValues: { username: "", password: "" },
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

	const onSubmit: SubmitHandler<SignInPayload> = (values) => {
		login(values);
	};

	return (
		<FormLayout title={TEXTS.formTitle}>
			<form className='mb-14' onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<TextField
						label={TEXTS.usernameLabel}
						placeholder={TEXTS.usernamePlaceholder}
						{...register("username")}
						fullWidth
						helperText={errors.username ? errors.username.message : " "}
						error={!!errors.username}
					/>
				</div>

				<div className='mb-4'>
					<PasswordField
						label={TEXTS.passwordLabel}
						placeholder={TEXTS.passwordPlaceholder}
						{...register("password")}
						fullWidth
						helperText={errors.password ? errors.password.message : " "}
						error={!!errors.password}
					/>
				</div>

				<div className='mt-8'>
					<LoadingButton type='submit' isLoading={isLoginLoading}>
						{TEXTS.submitButton}
					</LoadingButton>
				</div>
			</form>

			<div className='flex flex-col sm:flex-row items-center justify-between text-[20px] leading-6 mb-8'>
				<span>{TEXTS.donthaveaccount}</span>
				<button
					onClick={() => router.push("/login/signup")}
					className='px-3 py-1 rounded border border-primary font-medium mt-2 sm:mt-0 hover:bg-primary hover:text-white transition-all'
				>
					{TEXTS.signupButton}
				</button>
			</div>

			<span
				className='text-[20px] leading-6 px-3 rounded py-1 cursor-pointer mx-auto hover:bg-primary hover:text-white transition-all'
				onClick={() => router.push("/login/password_recovery")}
			>
				{TEXTS.forgotPasswordButton}
			</span>
		</FormLayout>
	);
};

export default SignInForm;
