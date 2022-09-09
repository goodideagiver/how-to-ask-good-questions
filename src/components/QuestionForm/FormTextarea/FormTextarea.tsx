import classes from './FormTextarea.module.scss';

import { ChangeEvent, useEffect, useId } from 'react';
import { useTranslation } from 'react-i18next';
import { cssBool, cssClass } from '../../../helpers/cssClass.helper';

type Props = {
	placeholder: string;
	onChange: (name: string, value: string, key: string) => void;
	value: string;
	label: string;
	objectKey: string;
	animate?: boolean;
	visible?: boolean;
};

export const FormTextarea = ({
	onChange,
	placeholder,
	value,
	label,
	objectKey,
	animate = false,
	visible = true,
}: Props) => {
	const inputId = useId();

	const inputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(label, event.target.value, objectKey);
	};

	const rootClassNames = cssClass(
		classes.root,
		cssBool(animate, classes.animate)
	);

	const { t } = useTranslation();

	useEffect(() => {
		if (value && value.length > 0) {
			onChange(label, value, objectKey);
		}
	}, [t]);

	if (!visible) return null;

	return (
		<div className={rootClassNames}>
			<label className={classes.label} htmlFor={inputId}>
				{label}
			</label>
			<textarea
				className={classes.textarea}
				onChange={inputChangeHandler}
				placeholder={placeholder}
				value={value}
				id={inputId}
			/>
		</div>
	);
};
