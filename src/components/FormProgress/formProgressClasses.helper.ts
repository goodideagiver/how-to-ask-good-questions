import { cssClass } from '../../helpers/cssClass.helper';
import classes from './FormProgress.module.scss';

export const formClassesHelper = (max: number, percentage: number) => {
	const { root, complete, overcomplete, empty } = classes;

	let classNames = root;

	if (percentage === 0) {
		classNames = cssClass(root, empty);
	}

	if (percentage === max) {
		classNames = cssClass(root, complete);
	}

	if (percentage > max) {
		classNames = cssClass(root, overcomplete);
	}

	return { classNames };
};
