import { useTranslation } from 'react-i18next';
import classes from './FormProgress.module.scss';
import { useFormClasses } from './useFormProgress.hook';

type Props = {
	percentage: number;
};

export const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;

export const FormProgress = ({ percentage = MIN_PERCENTAGE }: Props) => {
	const { classNames } = useFormClasses(MAX_PERCENTAGE, percentage);

	const { t } = useTranslation();

	const completionComment = t('completionComment');

	const overcompletionComment = t('overcompletionComment');

	return (
		<div className={classNames}>
			<div className={classes.progWrapper}>
				<div
					className={classes.prog}
					style={{
						width: `${percentage}%`,
						maxWidth: `${MAX_PERCENTAGE}%`,
					}}
				>
					{percentage === MAX_PERCENTAGE && (
						<p className={classes.comment}>{completionComment}</p>
					)}
					{percentage > MAX_PERCENTAGE && (
						<p className={classes.comment}>{overcompletionComment}</p>
					)}
				</div>
			</div>
		</div>
	);
};
