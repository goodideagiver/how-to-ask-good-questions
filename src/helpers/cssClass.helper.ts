export const cssClass = (...css: string[]) => {
	const cssClasses = css.filter(Boolean).join(' ');

	return cssClasses;
};
