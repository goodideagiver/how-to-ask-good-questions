import { Portal } from '../../HOC/Portal/Portal';
import classes from './FormProgress.module.scss';
import { ProgressBar } from './ProgressBar';
import { useFormClasses } from './useFormProgressClasses.hook';
import { useIsMobile } from './useIsMobile.hook';

type Props = {
	percentage: number;
};

export const MAX_PERCENTAGE = 100;
export const MAX_PIXELS_WIDTH = 800;

export const FormProgress = ({ percentage }: Props) => {
	const { classNames } = useFormClasses(MAX_PERCENTAGE, percentage);

	const isMobile = useIsMobile(MAX_PIXELS_WIDTH);

	const FormElement = (
		<div className={classNames}>
			<div className={classes.progWrapper}>
				<ProgressBar percentage={percentage} />
			</div>
		</div>
	);

	return isMobile ? <Portal>{FormElement}</Portal> : FormElement;
};
