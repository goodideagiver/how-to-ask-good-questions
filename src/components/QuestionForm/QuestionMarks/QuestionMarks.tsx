import { QuestionMark } from './QuestionMark';

import classes from './QuestionMarks.module.scss';

type Props = {};

export const QuestionMarks = ({}: Props) => {
	return (
		<>
			<QuestionMark className={classes.first} />
			<QuestionMark className={classes.second} />
			<QuestionMark className={classes.third} />
		</>
	);
};
