import { QuestionMark } from './QuestionMark';

import classes from './QuestionMarks.module.scss';

export const QuestionMarks = () => {
	return (
		<>
			<QuestionMark className={classes.first} />
			<QuestionMark className={classes.second} />
			<QuestionMark className={classes.third} />
		</>
	);
};
