import classes from './QuestionMark.module.scss';

import question from '../../../assets/question.png';
import { cssClass } from '../../../helpers/cssClass.helper';

type Props = {
	className?: string;
};

export const QuestionMark = ({ className }: Props) => {
	const classNames = cssClass(classes.root, className || '');

	return <img className={classNames} aria-hidden='true' src={question} />;
};
