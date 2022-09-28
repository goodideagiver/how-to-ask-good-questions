import { MouseEvent, useEffect, useId, useState } from 'react';

export const useOptionalInput = (onChildrenHide: () => void) => {
	const [childrenIsVisible, setChildrenIsVisible] = useState(false);

	const checkboxId = useId();

	const checkboxChangeHandler = () => {
		setChildrenIsVisible(!childrenIsVisible);
	};

	const labelButtonClickHandler = (ev: MouseEvent<HTMLButtonElement>) => {
		ev.preventDefault();
		checkboxChangeHandler();
	};

	useEffect(() => {
		if (!childrenIsVisible) {
			onChildrenHide();
		}
	}, [childrenIsVisible]);

	return {
		checkboxId,
		checkboxChangeHandler,
		childrenIsVisible,
		labelButtonClickHandler,
	};
};
