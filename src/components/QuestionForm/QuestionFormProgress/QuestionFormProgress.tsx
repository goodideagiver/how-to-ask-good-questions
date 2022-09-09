import { cssClass } from '../../../helpers/cssClass.helper';
import { FormProgress } from '../../FormProgress/FormProgress';

import classes from './QuestionFormProgress.module.scss';

type Props = {
	percentage: number;
	isParentScrolled: boolean;
};
export const QuestionFormProgress = ({
	percentage,
	isParentScrolled,
}: Props) => {
	const progressClasses = cssClass(
		classes.floating,
		isParentScrolled ? classes.scrolled : ''
	);

	return (
		<div className={progressClasses}>
			<FormProgress percentage={percentage} />
		</div>
	);
};
