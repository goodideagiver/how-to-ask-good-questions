/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next';
import { DECLARED_LANGUAGES } from '../../config';

import classes from './LanguageSelect.module.scss';
import { useLanguageSelect } from './useLanguageSelect';

export const LanguageSelect = () => {
	const { t } = useTranslation();

	const { selectHandler, selectRef } = useLanguageSelect();

	const LanguageOptions = DECLARED_LANGUAGES.map((lang) => (
		<option key={lang} value={lang}>
			{lang}
		</option>
	));

	return (
		<div>
			<label htmlFor='lang-select'>{t('chooseLanguage')}:</label>
			<select
				ref={selectRef}
				className={classes.input}
				onChange={selectHandler}
				name='languages'
				id='lang-select'
			>
				<option disabled value=''>
					--Please choose an option--
				</option>
				{LanguageOptions}
			</select>
		</div>
	);
};
