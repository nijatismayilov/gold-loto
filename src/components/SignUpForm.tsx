import { Language } from "features/localizationSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "components/Textfield";
import { SIGNUP_FORM } from "locales";
import { validationSchema, buildSignUpErrorMessages } from "form-validations/signupForm";
import { useRegisterMutation } from "features/api";
import { useRevalidateFormOnLangChange } from "hooks/useRevalidateFormOnLangChange";
import PhoneNumberField from "components/PhoneNumberField";
import CheckboxField from "components/CheckboxField";
import { buildSignUpPayload } from "request-payload-builders/signupForm";
import DatePicker from "components/DatePicker";
import LoadingButton from "components/LoadingButton";

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
	birthday: Date;
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
	birthday: null,
	agreeToTerms: false,
};

interface Props {
	language: Language;
}

const SignUpForm: React.FC<Props> = (props) => {
	const { language } = props;
	const TEXTS = SIGNUP_FORM[language];
	const errorMessages = buildSignUpErrorMessages(TEXTS);
	const [registerAction, { isLoading: isRegisterLoading }] = useRegisterMutation();

	const methods = useForm<SignUpFormValues>({
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
		control,
		watch,
	} = methods;

	console.log(watch("birthday"));

	useRevalidateFormOnLangChange({ trigger });

	const onSubmit: SubmitHandler<SignUpFormValues> = (values) => {
		const payload = buildSignUpPayload(values);

		registerAction(payload);
	};

	return (
		<div className='rounded-xl bg-accent shadow-lg py-5 px-6 flex flex-col w-[90%] xs:w-[80%] sm:w-fit'>
			<h3 className='text-center font-semibold text-4xl mb-4'>{TEXTS.formTitle}</h3>

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
					<DatePicker
						label={TEXTS.birthdayLabel}
						control={control}
						name='birthday'
						error={!!errors.birthday}
						helperText={errors.birthday ? errors.birthday.message : " "}
					/>
				</div>

				<div className='mb-4'>
					<PhoneNumberField
						label={TEXTS.phoneLabel}
						name={"phone"}
						control={control}
						helperText={errors.phone ? errors.phone.message : " "}
						error={!!errors.phone}
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
						type='password'
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
					<CheckboxField
						label={TEXTS.agreeToTerms}
						name='agreeToTerms'
						control={control}
						error={!!errors.agreeToTerms}
					/>
				</div>

				<div className='mt-8'>
					<LoadingButton type='submit' isLoading={isRegisterLoading}>
						{TEXTS.submitButton}
					</LoadingButton>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
