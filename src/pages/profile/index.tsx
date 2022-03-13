import { selectIsUserProfileLoading } from "features/api/endpoints/auth";
import { selectUser } from "features/authSlice";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import UserProfileForm from "components/UserProfileForm";

const Profile: React.FC = () => {
	const user = useSelector(selectUser);
	const isLoading = useSelector(selectIsUserProfileLoading);

	return (
		<div>
			<div className='container mx-auto'>
				{isLoading ? <CircularProgress /> : <UserProfileForm user={user} />}
			</div>
		</div>
	);
};

// @ts-ignore
Profile.auth = true;

export default Profile;
