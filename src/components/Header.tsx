import LangOptionLabel from "components/LangOptionLabel";
import Logo from "components/Logo";
import ProfileIcon from "components/ProfileIcon";
import { AZ, GB, RU } from "country-flag-icons/react/3x2";
import { flushAuth, selectUser } from "features/authSlice";
import { Language, selectLanguage, setLanguage } from "features/localizationSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { OnChangeValue } from "react-select";
import { LocalStorage } from "utils/local-storage";

type LangOption = {
	label: React.ReactNode;
	value: Language;
};

const langOptions: LangOption[] = [
	{
		label: <LangOptionLabel flag={AZ} label='AZ' />,
		value: "az",
	},
	{
		label: <LangOptionLabel flag={GB} label='EN' />,
		value: "en",
	},
	{
		label: <LangOptionLabel flag={RU} label='RU' />,
		value: "ru",
	},
];

const Header: React.FC = () => {
	const dispatch = useDispatch();
	const language = useSelector(selectLanguage);
	const user = useSelector(selectUser);

	const selectValue = langOptions.find(({ value }) => value === language);

	const handleSelectChange = (option: OnChangeValue<LangOption, false>) => {
		dispatch(setLanguage(option.value));
	};

	const handleClick = () => {
		dispatch(flushAuth());
	};

	useEffect(() => {
		const cacheLang = LocalStorage.getLanguage();

		dispatch(setLanguage(cacheLang));
	}, [dispatch]);

	return (
		<header className='bg-primary sticky top-0 z-[1000]'>
			<div className='container mx-auto'>
				<div className='flex justify-start sm:justify-center items-center py-7 relative'>
					<Logo />

					<div className='absolute top-1/2 right-2 sm:right-0 -translate-y-1/2 flex items-center'>
						<Select
							id='selectbox'
							instanceId={"selectbox"}
							options={langOptions}
							value={selectValue}
							onChange={handleSelectChange}
							isSearchable={false}
						/>

						{user && (
							<div
								className='ml-4 bg-white border border-[#cccccc] rounded py-2 px-4 leading-tight flex items-center cursor-pointer'
								onClick={handleClick}
							>
								<ProfileIcon height={16} className='!fill-primary mr-1' />
								{user.username}
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
