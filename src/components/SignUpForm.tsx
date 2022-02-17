import { Language } from "features/localizationSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox } from "@mui/material";
import TextField from "./Textfield";
import { SIGNUP_FORM } from "locales";
import { validationSchema, SignUpErrorMessages } from "form-validations/signupForm";
import { useRegisterMutation } from "features/authApi";
import toast from "react-hot-toast";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";
import PhoneNumberField from "./PhoneNumberField";

export type SignUpFormValues = {
	name: string;
	surname: string;
	pathernalName: string;
	phone: string;
	email: string;
	username: string;
	referralId?: string;
	password: string;
	passwordConfirm: string;
	agreeToTerms: boolean;
};

const defaultValues: SignUpFormValues = {
	name: "",
	surname: "",
	pathernalName: "",
	phone: "",
	email: "",
	username: "",
	referralId: "",
	password: "",
	passwordConfirm: "",
	agreeToTerms: false,
};

interface Props {
	language: Language;
}

const SignUpForm: React.FC<Props> = (props) => {
	const { language } = props;
	const TEXTS = SIGNUP_FORM[language];
	const errorMessages: SignUpErrorMessages = {
		username: TEXTS.usernameError,
		email: {
			required: TEXTS.emailRequired,
			invalid: TEXTS.emailInvalid,
		},
		phone: TEXTS.phoneError,
		name: TEXTS.nameError,
		surname: TEXTS.surnameError,
		pathernalName: TEXTS.pathernalNameError,
		password: {
			required: TEXTS.passwordRequired,
			min: TEXTS.passwordMin,
		},
		passwordMatch: TEXTS.passwordMatch,
	};

	const methods = useForm<SignUpFormValues>({
		defaultValues,
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: yupResolver(validationSchema(errorMessages)),
	});
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
		trigger,
		control,
		watch,
	} = methods;

	useRevalidateFormOnLangChange({ trigger, isDirty });

	const onSubmit: SubmitHandler<SignUpFormValues> = (values) => {
		if (!values.agreeToTerms) return toast.error("");

		console.log(values);
	};

	const values = watch();

	return (
		<div className='rounded-xl bg-accent shadow-lg py-5 px-6 flex flex-col w-[90%] xs:w-[80%] sm:w-fit'>
			<h3 className='text-center font-semibold text-4xl mb-4'>{TEXTS.formTitle}</h3>

			<pre>{JSON.stringify(values, null, 2)}</pre>

			<form className='w-full sm:w-[350px] mb-14' onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<TextField
						label={TEXTS.nameLabel}
						{...register("name")}
						fullWidth
						helperText={errors.name ? errors.name.message : " "}
						error={!!errors.name}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.surnameLabel}
						{...register("surname")}
						fullWidth
						helperText={errors.surname ? errors.surname.message : " "}
						error={!!errors.surname}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.pathernalNameLabel}
						{...register("pathernalName")}
						fullWidth
						helperText={errors.pathernalName ? errors.pathernalName.message : " "}
						error={!!errors.pathernalName}
					/>
				</div>

				<div className='mb-4'>
					<PhoneNumberField
						label={TEXTS.phoneLabel}
						name={"phone"}
						control={control}
						helperText={errors.phone ? errors.phone.message : " "}
						error={!!errors.phone}
						// {...register("phone")}
						// label={TEXTS.phoneLabel}
						// helperText={errors.phone ? errors.phone.message : " "}
						// error={!!errors.phone}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.emailLabel}
						{...register("email")}
						fullWidth
						helperText={errors.email ? errors.email.message : " "}
						error={!!errors.email}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.usernameLabel}
						{...register("username")}
						fullWidth
						helperText={errors.username ? errors.username.message : " "}
						error={!!errors.username}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.passwordLabel}
						{...register("password")}
						fullWidth
						type='password'
						helperText={errors.password ? errors.password.message : " "}
						error={!!errors.password}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.passwordConfirmLabel}
						{...register("passwordConfirm")}
						fullWidth
						helperText={errors.passwordConfirm ? errors.passwordConfirm.message : " "}
						error={!!errors.passwordConfirm}
					/>
				</div>

				<div className='mb-4'>
					<TextField
						label={TEXTS.referralIdLabel}
						{...register("referralId")}
						fullWidth
						helperText={errors.referralId ? errors.referralId.message : " "}
						error={!!errors.referralId}
					/>
				</div>

				<div className='mb-4'>
					<Checkbox {...register("agreeToTerms")} />
				</div>

				<div className='mt-8'>
					<button
						type='submit'
						className='bg-primary py-[10px] w-full text-center text-white font-semibold text-2xl rounded active:scale-[97.5%] transition-all'
						// disabled={isLoginLoading}
					>
						{TEXTS.submitButton}
					</button>
				</div>
			</form>

			{/* <div className='flex flex-col sm:flex-row items-center justify-between text-[20px] leading-6 mb-5'>
				<span>{TEXTS.donthaveaccount}</span>
				<button
					onClick={() => setLoginView("signup")}
					className='px-3 py-1 rounded border border-primary font-medium mt-2 sm:mt-0'
				>
					{TEXTS.signupButton}
				</button>
			</div> */}

			{/* <span
				className='text-[20px] leading-6 cursor-pointer mx-auto'
				onClick={() => setLoginView("password recovery")}
			>
				{TEXTS.forgotPasswordButton}
			</span> */}
		</div>
	);
};

export default SignUpForm;
