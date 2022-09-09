import i18next from 'i18next';
import { ChangeEvent, useEffect, useRef } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage.hook';

export const useLanguageSelect = () => {
	const { setItem, value } = useLocalStorage('language');

	const selectRef = useRef<HTMLSelectElement>(null);

	const langChangeHandler = (lang: string) => {
		i18next.changeLanguage(lang);
		setItem(lang);
	};

	const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		if (event.target.value.trim().length > 0) {
			langChangeHandler(event.target.value);
		}
	};

	useEffect(() => {
		if (selectRef.current && value) {
			selectRef.current.value = value;
			langChangeHandler(value);
		}
	}, [value]);

	return { selectHandler, selectRef };
};
