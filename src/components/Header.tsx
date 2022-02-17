import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, selectLanguage, Language } from "features/localizationSlice";
import Logo from "components/Logo";
import { AZ, RU, GB } from "country-flag-icons/react/3x2";
import Select, { OnChangeValue } from "react-select";
import LangOptionLabel from "components/LangOptionLabel";
import { getLanguageFromLocalStorage } from "utils/localStorage";
import { flushAuth, selectUser } from "features/authSlice";
import ProfileIcon from "components/ProfileIcon";

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
		const cacheLang = getLanguageFromLocalStorage();

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
