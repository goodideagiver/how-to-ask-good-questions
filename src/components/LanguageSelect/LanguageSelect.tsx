import i18n, { t } from 'i18next';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelect = () => {
	const langChangeHandler = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		if (event.target.value.trim().length > 0) {
			langChangeHandler(event.target.value);
		}
	};

	const { t } = useTranslation();

	return (
		<div>
			<label htmlFor='lang-select'>{t('chooseLanguage')}:</label>
			<select onChange={selectHandler} name='languages' id='lang-select'>
				<option value=''>--Please choose an option--</option>
				<option value='en'>ENG</option>
				<option value='pl'>PL</option>
			</select>
		</div>
	);
};
