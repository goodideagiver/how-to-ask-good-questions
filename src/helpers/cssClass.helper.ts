export const cssClass = (...css: string[]) => {
	const cssClasses = css.filter(Boolean).join(' ');

	return cssClasses;
};

export const cssBool = (condition: boolean, css: string) => {
	return condition ? css : '';
};
