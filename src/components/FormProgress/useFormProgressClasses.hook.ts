import { cssClass } from '../../helpers/cssClass.helper';
import classes from './FormProgress.module.scss';

export const useFormClasses = (max: number, percentage: number) => {
	const { root, complete, overcomplete } = classes;

	let classNames = root;

	if (percentage === max) {
		classNames = cssClass(root, complete);
	}

	if (percentage > max) {
		classNames = cssClass(root, overcomplete);
	}

	return { classNames };
};
