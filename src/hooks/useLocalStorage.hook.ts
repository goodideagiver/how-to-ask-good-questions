import { useEffect } from 'react';

export const useLocalStorage = (key: string) => {
	let value: string | null = localStorage.getItem(key);

	useEffect(() => {
		value = localStorage.getItem(key);
	}, [window.localStorage]);

	const setItem = (value: string) => {
		localStorage.setItem(key, value);
	};

	return { value, setItem };
};
