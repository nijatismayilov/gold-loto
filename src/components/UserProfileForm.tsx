import FormLayout from "components/FormLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "components/Textfield";
import { UserProfile } from "types/user";
import PhoneNumberField from "components/PhoneNumberField";

interface Props {
	user: UserProfile;
}

const UserProfileForm: React.FC<Props> = (props) => {
	const { user } = props;
	const methods = useForm({
		defaultValues: user,
	});

	const { handleSubmit, register, control } = methods;

	const onSubmit: SubmitHandler<typeof user> = (values) => {
		console.log(values);
	};

	return (
		<FormLayout title='Istifadeci melumatlari'>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
				<div className='w-1/2 mb-3'>
					<TextField {...register("username")} fullWidth label='username' disabled />
				</div>

				<div className='w-1/2 mb-3'>
					<TextField {...register("email")} fullWidth label='email' type={"email"} disabled />
				</div>

				<div className='w-1/2 mb-3'>
					<TextField {...register("pin")} fullWidth label='Pin' disabled />
				</div>

				<div className='w-1/2 mb-3'>
					<TextField {...register("document_photo")} fullWidth label='Document photo' disabled />
				</div>

				<div className='w-1/2 mb-3'>
					<PhoneNumberField control={control} name='phone' label='phone' disabled />
				</div>
			</form>
		</FormLayout>
	);
};

export default UserProfileForm;
