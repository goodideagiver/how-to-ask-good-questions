import { useTranslation } from 'react-i18next';
import classes from './FormProgress.module.scss';

type Props = {
	percentage: number;
};

const MAX_PERCENTAGE: number = 100;

export const FormProgress = ({ percentage = 0 }: Props) => {
	let classNames = classes.root;

	if (percentage === 100) {
		classNames = `${classes.root} ${classes.complete}`;
	}

	if (percentage > 100) {
		classNames = `${classes.root} ${classes.overcomplete}`;
	}

	const { t } = useTranslation();

	const completionComment = t('completionComment');

	const overcompletionComment = t('overcompletionComment');

	return (
		<div className={classNames}>
			{percentage === 100 && completionComment}
			{percentage > 100 && overcompletionComment}
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
