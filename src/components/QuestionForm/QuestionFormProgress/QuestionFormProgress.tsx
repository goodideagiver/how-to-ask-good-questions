import { FormProgress } from '../../FormProgress/FormProgress';

import classes from './QuestionFormProgress.module.scss';

type Props = {
	percentage: number;
	isParetnScrolled: boolean;
};
export const QuestionFormProgress = ({
	percentage,
	isParetnScrolled,
}: Props) => {
	const progressClasses = `${classes.floating} ${
		isParetnScrolled ? classes.scrolled : ''
	}`;

	return (
		<div className={progressClasses}>
			<FormProgress percentage={percentage} />
		</div>
	);
};
