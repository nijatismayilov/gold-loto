import { FOOTER } from "locales";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";

const Footer: React.FC = () => {
	const language = useSelector(selectLanguage);
	const TEXTS = FOOTER[language];

	return (
		<footer className='flex justify-center bg-primary py-7 text-white text-[20px] leading-6'>
			&copy; {TEXTS.copyright}
		</footer>
	);
};

export default Footer;
