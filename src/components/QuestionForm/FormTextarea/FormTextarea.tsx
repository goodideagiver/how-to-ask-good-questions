import classes from './FormTextarea.module.scss';

import { useId } from 'react';

type Props = {
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
	label: string;
};

export const FormTextarea = ({
	onChange,
	placeholder,
	value,
	label,
}: Props) => {
	const inputId = useId();

	return (
		<div className={classes.root}>
			<label className={classes.label} htmlFor={inputId}>
				{label}
			</label>
			<textarea
				className={classes.textarea}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				id={inputId}
			/>
		</div>
	);
};
