import { Language } from "features/localizationSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "components/Textfield";
import { SIGNIN_FORM } from "locales";
import { buildSignInErrorMessages, validationSchema } from "form-validations/signinForm";
import { SignInPayload, useLoginMutation } from "features/authApi";
import { useRouter } from "next/router";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";

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
		formState: { errors, isDirty },
		trigger,
	} = methods;

	useRevalidateFormOnLangChange({ trigger, isDirty });

	const onSubmit: SubmitHandler<SignInPayload> = (values) => {
		login(values);
	};

	return (
		<div className='rounded-xl bg-accent shadow-lg py-5 px-6 flex flex-col w-[90%] xs:w-[80%] sm:w-fit'>
			<h3 className='text-center font-semibold text-4xl mb-4'>{TEXTS.formTitle}</h3>

			<form className='w-full sm:w-[350px] mb-14' onSubmit={handleSubmit(onSubmit)}>
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
					<TextField
						label={TEXTS.passwordLabel}
						placeholder={TEXTS.passwordPlaceholder}
						{...register("password")}
						fullWidth
						type='password'
						helperText={errors.password ? errors.password.message : " "}
						error={!!errors.password}
					/>
				</div>

				<div className='mt-8'>
					<button
						type='submit'
						className='bg-primary py-[10px] w-full text-center text-white font-semibold text-2xl rounded active:scale-[97.5%] transition-all'
						disabled={isLoginLoading}
					>
						{TEXTS.submitButton}
					</button>
				</div>
			</form>

			<div className='flex flex-col sm:flex-row items-center justify-between text-[20px] leading-6 mb-8'>
				<span>{TEXTS.donthaveaccount}</span>
				<button
					onClick={() => router.push("login/signup")}
					className='px-3 py-1 rounded border border-primary font-medium mt-2 sm:mt-0 hover:bg-primary hover:text-white transition-all'
				>
					{TEXTS.signupButton}
				</button>
			</div>

			<span
				className='text-[20px] leading-6 px-3 rounded py-1 cursor-pointer mx-auto hover:bg-primary hover:text-white transition-all'
				onClick={() => router.push("login/password_recovery")}
			>
				{TEXTS.forgotPasswordButton}
			</span>
		</div>
	);
};

export default SignInForm;
