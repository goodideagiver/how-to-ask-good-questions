import { useTranslation } from 'react-i18next';

import classes from './LanguageSelect.module.scss';
import { useLanguageSelect } from './useLanguageSelect';

export const LanguageSelect = () => {
	const { t } = useTranslation();

	const { selectHandler, selectRef } = useLanguageSelect();

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
				<option value='en'>ENG</option>
				<option value='pl'>PL</option>
			</select>
		</div>
	);
};
