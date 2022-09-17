import classes from './FormProgress.module.scss';
import { PercentageComment } from './PercentageComment';
import { useFormClasses } from './useFormProgressClasses.hook';

type Props = {
	percentage: number;
};

export const MAX_PERCENTAGE = 100;

export const FormProgress = ({ percentage }: Props) => {
	const { classNames } = useFormClasses(MAX_PERCENTAGE, percentage);

	return (
		<div className={classNames}>
			<div className={classes.progWrapper}>
				<div
					aria-label='progress bar'
					className={classes.prog}
					style={{
						width: `${percentage}%`,
						maxWidth: `${MAX_PERCENTAGE}%`,
					}}
				>
					<PercentageComment
						maxPercentage={MAX_PERCENTAGE}
						percentage={percentage}
					/>
				</div>
			</div>
		</div>
	);
};
