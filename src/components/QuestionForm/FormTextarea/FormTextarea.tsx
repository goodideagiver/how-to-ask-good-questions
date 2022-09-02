import classes from './FormTextarea.module.scss';

import { ChangeEvent, useId } from 'react';

type Props = {
	placeholder: string;
	onChange: (name: string, value: string, key: string) => void;
	value: string;
	label: string;
	objectKey: string;
	onEmptyInput: () => void;
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
	onEmptyInput,
}: Props) => {
	const inputId = useId();

	const inputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (event.target.value.trim().length === 0) {
			onEmptyInput();
			return;
		}
		onChange(label, event.target.value, objectKey);
	};

	const rootClassNames = `${classes.root} ${animate ? classes.animate : ''}`;

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
