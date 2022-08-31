import { ReactNode, useEffect, useId, useState } from 'react';
import classes from './OptionalInput.module.scss';

type Props = {
	children: ReactNode;
	onHide: () => void;
	label: string;
};

export const OptionalInput = ({ children, onHide, label }: Props) => {
	const [active, setActive] = useState(false);

	const checkboxLabel = useId();

	const checkboxChangeHandler = () => {
		setActive(!active);
	};

	useEffect(() => {
		if (!active) {
			onHide();
		}
	}, [active]);

	return (
		<>
			<div className={classes.root}>
				<label className={classes.label} htmlFor={checkboxLabel}>
					<span>{label}</span>
				</label>
				<div className={classes.controls}>
					<input
						className={classes.check}
						type='checkbox'
						id={checkboxLabel}
						onChange={checkboxChangeHandler}
					></input>
					<label
						tabIndex={0}
						className={classes.circle}
						htmlFor={checkboxLabel}
					></label>
				</div>
			</div>
			{active && children}
		</>
	);
};
