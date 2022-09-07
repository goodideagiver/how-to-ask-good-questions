import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import classes from './FormOutput.module.scss';

type Props = {
	hasMessage: boolean;
	message: string;
};

export const FormOutput = ({ hasMessage, message }: Props) => {
	const { t } = useTranslation();

	const outputCss = `${classes.right} ${!message ? classes.hidden : ''}`;

	return (
		<div className={outputCss}>
			<p>{t('outputPreview')}:</p>
			<p className={classes.output}>
				{hasMessage ? (
					<ReactMarkdown className={classes.markdown}>{message}</ReactMarkdown>
				) : (
					<p className={classes.empty}>{t('noData')}</p>
				)}
			</p>
		</div>
	);
};
