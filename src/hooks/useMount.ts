import { useEffect, useRef } from "react";

export const useMount = () => {
	const ref = useRef(false);

	useEffect(() => {
		if (ref.current) {
			return;
		}

		ref.current = true;
	}, []);

	return ref.current;
};
