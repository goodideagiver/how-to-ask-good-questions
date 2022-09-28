import { Portal } from '../../HOC/Portal/Portal';
import classes from './FormProgress.module.scss';
import { formClassesHelper } from './FormProgressClasses.helper';
import { ProgressBar } from './ProgressBar';
import { useIsMobile } from './useIsMobile.hook';

type Props = {
	percentage: number;
};

export const MAX_PERCENTAGE = 100;
export const MAX_PIXELS_WIDTH = 800;

export const FormProgress = ({ percentage }: Props) => {
	const { classNames } = formClassesHelper(MAX_PERCENTAGE, percentage);

	const isMobile = useIsMobile(MAX_PIXELS_WIDTH);

	const Progress = (
		<div className={classNames}>
			<div className={classes.progWrapper}>
				<ProgressBar percentage={percentage} />
			</div>
		</div>
	);

	return isMobile ? <Portal>{Progress}</Portal> : Progress;
};
