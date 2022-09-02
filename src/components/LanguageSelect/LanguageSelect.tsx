import i18n from 'i18next';
import { ChangeEvent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../../hooks/useLocalStorage.hook';

import classes from './LanguageSelect.module.scss';

const EMPTY_STRING_LENGTH = 0;

export const LanguageSelect = () => {
	const { setItem, value } = useLocalStorage('language');

	const selectRef = useRef<HTMLSelectElement>(null);

	const langChangeHandler = (lang: string) => {
		i18n.changeLanguage(lang);
		setItem(lang);
	};

	const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		if (event.target.value.trim().length > EMPTY_STRING_LENGTH) {
			langChangeHandler(event.target.value);
		}
	};

	const { t } = useTranslation();

	useEffect(() => {
		if (selectRef.current && value) {
			selectRef.current.value = value;
			langChangeHandler(value);
		}
	}, [value]);

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
				<option value=''>--Please choose an option--</option>
				<option value='en'>ENG</option>
				<option value='pl'>PL</option>
			</select>
		</div>
	);
};
