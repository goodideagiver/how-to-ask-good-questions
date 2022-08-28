import classes from './FormTextarea.module.scss';

import { ChangeEvent, useId } from 'react';

type Props = {
	placeholder: string;
	onChange: (name: string, value: string, key: string) => void;
	value: string;
	label: string;
	objectKey: string;
};

export const FormTextarea = ({
	onChange,
	placeholder,
	value,
	label,
	objectKey,
}: Props) => {
	const inputId = useId();

	const inputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(label, event.target.value, objectKey);
	};

	return (
		<div className={classes.root}>
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
