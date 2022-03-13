import { selectLanguage } from "features/localizationSlice";
import { useEffect, useRef } from "react";
import { UseFormTrigger } from "react-hook-form";
import { useSelector } from "react-redux";

type Arguments<T> = {
	trigger: UseFormTrigger<T>;
};

export const useRevalidateFormOnLangChange = <T>(args: Arguments<T>) => {
	const { trigger } = args;
	const isMounted = useRef(false);
	const language = useSelector(selectLanguage);

	useEffect(() => {
		isMounted.current && trigger();
	}, [language, trigger]);

	useEffect(() => {
		isMounted.current = true;
	}, []);
};
