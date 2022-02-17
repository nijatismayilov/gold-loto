import { useRef, useEffect } from "react";
import { UseFormTrigger } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectLanguage } from "features/localizationSlice";

type Arguments<T> = {
	trigger: UseFormTrigger<T>;
	isDirty: boolean;
};

export const useRevalidateFormOnLangChange = <T>(args: Arguments<T>) => {
	const { trigger, isDirty } = args;
	const isMounted = useRef(false);
	const language = useSelector(selectLanguage);

	useEffect(() => {
		isMounted.current && isDirty && trigger();
	}, [isDirty, language, trigger]);

	useEffect(() => {
		isMounted.current = true;
	}, []);
};
