import i18n from 'i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
	en: {
		translation: en,
	},
	pl: {
		translation: pl,
	},
} as const;

export const DECLARED_LANGUAGES = ['en', 'pl'];

const handleLangLoad = () => {
	const lang = localStorage.getItem('language') || 'en';
	if (DECLARED_LANGUAGES.includes(lang)) {
		return lang;
	} else {
		localStorage.setItem('language', 'en');
		return 'en';
	}
};

i18n.use(initReactI18next).init({
	lng: handleLangLoad(),
	interpolation: {
		escapeValue: false,
	},
	resources,
	react: {
		useSuspense: false,
	},
	fallbackLng: 'en',
});
