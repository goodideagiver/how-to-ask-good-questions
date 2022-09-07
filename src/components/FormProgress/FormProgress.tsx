import { useTranslation } from 'react-i18next';
import classes from './FormProgress.module.scss';

type Props = {
	percentage: number;
	isScrolledDown: boolean;
};

export const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;

export const FormProgress = ({ percentage = MIN_PERCENTAGE }: Props) => {
	let classNames = classes.root;

	if (percentage === MAX_PERCENTAGE) {
		classNames = `${classes.root} ${classes.complete}`;
	}

	if (percentage > MAX_PERCENTAGE) {
		classNames = `${classes.root} ${classes.overcomplete}`;
	}

	const { t } = useTranslation();

	const completionComment = t('completionComment');

	const overcompletionComment = t('overcompletionComment');

	return (
		<div className={classNames}>
			{percentage === MAX_PERCENTAGE && completionComment}
			{percentage > MAX_PERCENTAGE && overcompletionComment}
			<div className={classes.progWrapper}>
				<div
					className={classes.prog}
					style={{
						width: `${percentage}%`,
						maxWidth: `${MAX_PERCENTAGE}%`,
					}}
				></div>
			</div>
		</div>
	);
};
