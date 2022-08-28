import { ReactNode, useId, useState } from 'react';
import classes from './OptionalInput.module.scss';

type Props = {
	children: ReactNode;
};

export const OptionalInput = ({ children }: Props) => {
	const [active, setActive] = useState(false);

	const checkboxLabel = useId();

	return (
		<>
			<div className={classes.root}>
				<label className={classes.label} htmlFor={checkboxLabel}>
					Used technologies
				</label>
				<div className={classes.controls}>
					<input
						className={classes.check}
						type='checkbox'
						id={checkboxLabel}
						onChange={() => setActive(!active)}
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
