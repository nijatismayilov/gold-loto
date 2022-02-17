import { FlagComponent } from "country-flag-icons/react/3x2";

interface LangOptionLabelProps {
	flag: FlagComponent;
	label: string;
}

const LangOptionLabel: React.FC<LangOptionLabelProps> = (props) => {
	const { flag: FLAG, label } = props;

	return (
		<div className='flex items-center leading-tight'>
			<FLAG className='w-6 mr-1' /> <span className='w-6'>{label}</span>
		</div>
	);
};

export default LangOptionLabel;
