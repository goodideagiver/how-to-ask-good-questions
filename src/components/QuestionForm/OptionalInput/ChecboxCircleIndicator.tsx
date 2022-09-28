import { cssBool, cssClass } from '../../../helpers/cssClass.helper';
import classes from './OptionalInput.module.scss';

type Props = {
	checked: boolean;
	checkboxLabel: string;
};

export const ChecboxCircleIndicator = ({ checked, checkboxLabel }: Props) => {
	const circleClasses = cssClass(
		classes.circle,
		cssBool(checked, classes.circleChecked)
	);

	return <label className={circleClasses} htmlFor={checkboxLabel}></label>;
};
