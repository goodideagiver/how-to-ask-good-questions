import classes from './QuestionMark.module.scss';

import question from '../../../assets/question.png';

type Props = {
	className?: string;
};

export const QuestionMark = ({ className }: Props) => {
	const classNames = `${classes.root} ${className || ''}`;

	return <img className={classNames} aria-hidden='true' src={question} />;
};
