import classes from './FormProgress.module.scss';
import { ProgressBar } from './ProgressBar';
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
				<ProgressBar percentage={percentage} />
			</div>
		</div>
	);
};
