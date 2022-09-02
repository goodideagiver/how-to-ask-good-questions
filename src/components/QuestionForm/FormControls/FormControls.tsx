import { useTranslation } from 'react-i18next';
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect';
import classes from './FormControls.module.scss';

type Props = {
	copyMessageHanlder: () => void;
	resetFormHandler: () => void;
};
export const FormControls = ({
	copyMessageHanlder,
	resetFormHandler,
}: Props) => {
	const { t } = useTranslation();

	return (
		<div className={classes.controls}>
			<button onClick={copyMessageHanlder} type='button'>
				{t('mainButtons.copy')}
			</button>
			<button type='button' onClick={resetFormHandler}>
				{t('mainButtons.reset')}
			</button>
			<LanguageSelect />
		</div>
	);
};
