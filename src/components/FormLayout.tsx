interface Props {
	title: string | React.ReactNode;
}

const FormLayout: React.FC<Props> = (props) => {
	const { title, children } = props;

	return (
		<div className='rounded-xl bg-accent shadow-lg py-5 px-6 flex flex-col w-[90%] xs:w-[80%] sm:max-w-[450px]'>
			<h3 className='text-center font-semibold text-2xl xs:text-3xl sm:text-4xl mb-4'>{title}</h3>

			{children}
		</div>
	);
};

export default FormLayout;
