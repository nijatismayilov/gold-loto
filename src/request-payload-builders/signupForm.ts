import { SignUpFormValues } from "components/SignUpForm";
import { SignUpPayload } from "features/types";
import { format } from "date-fns";

export const buildSignUpPayload = (values: SignUpFormValues): SignUpPayload => {
	return {
		username: values.username,
		password: values.password,
		phone: `+${values.phone}`,
		full_name: `${values.name} ${values.surname} ${values.pathernalName}`,
		email: values.email,
		birthday: format(values.birthday, "yyyy-MM-dd"),
		is_mobile: false,
		referal_id: +(values.referralId || -1),
	};
};
