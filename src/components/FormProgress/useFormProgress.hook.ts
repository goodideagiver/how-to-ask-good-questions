import classes from './FormProgress.module.scss';

export const useFormClasses = (max: number, percentage: number) => {
	let classNames = classes.root;

	if (percentage === max) {
		classNames = `${classes.root} ${classes.complete}`;
	}

	if (percentage > max) {
		classNames = `${classes.root} ${classes.overcomplete}`;
	}

	return { classNames };
};
