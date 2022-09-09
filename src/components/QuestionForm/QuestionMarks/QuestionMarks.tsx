import { QuestionMark } from './QuestionMark';

import classes from './QuestionMarks.module.scss';

export const QuestionMarks = () => {
	const questionMarkClasses = ['first', 'second', 'third'];

	const QuestionMarks = questionMarkClasses.map((questionMarkClass) => (
		<QuestionMark
			key={questionMarkClass}
			className={classes[questionMarkClass]}
		/>
	));

	return <>{QuestionMarks}</>;
};
