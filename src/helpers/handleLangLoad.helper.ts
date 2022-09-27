import { DECLARED_LANGUAGES } from '../config';

export const handleLangLoad = () => {
	const lang = localStorage.getItem('language') || 'en';
	if (DECLARED_LANGUAGES.includes(lang)) {
		return lang;
	} else {
		localStorage.setItem('language', 'en');
		return 'en';
	}
};
