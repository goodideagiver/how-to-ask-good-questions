import i18n from 'i18next';
import en from '../src/locales/en/translation.json';
import pl from '../src/locales/pl/translation.json';
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
	lng: 'en',
	interpolation: {
		escapeValue: false,
	},
	resources,
});
