import classes from './FormProgress.module.scss';
import { PercentageComment } from './PercentageComment';
import { MAX_PERCENTAGE } from './FormProgress';

type Props = {
	percentage: number;
};

export const ProgressBar = ({ percentage }: Props) => (
	<div
		aria-label='progress bar'
		className={classes.prog}
		style={{
			width: `${percentage}%`,
			maxWidth: `${MAX_PERCENTAGE}%`,
		}}
	>
		<PercentageComment maxPercentage={MAX_PERCENTAGE} percentage={percentage} />
	</div>
);
