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

i18n.use(initReactI18next).init({
	lng: localStorage.getItem('language') || 'en',
	interpolation: {
		escapeValue: false,
	},
	resources,
	react: {
		useSuspense: false,
	},
});
