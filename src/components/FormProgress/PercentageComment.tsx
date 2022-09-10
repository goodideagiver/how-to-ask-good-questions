import { useTranslation } from 'react-i18next';
import classes from './PercentageComment.module.scss';

type Props = {
	maxPercentage: number;
	percentage: number;
};
export const PercentageComment = ({ maxPercentage, percentage }: Props) => {
	const { t } = useTranslation();

	const completionComment = t('completionComment');

	const overcompletionComment = t('overcompletionComment');

	if (percentage === maxPercentage) {
		return <div className={classes.comment}>{completionComment}</div>;
	}

	if (percentage > maxPercentage) {
		return <div className={classes.comment}>{overcompletionComment}</div>;
	}

	return null;
};
