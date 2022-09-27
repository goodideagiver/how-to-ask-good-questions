import {
	KeyboardEventHandler,
	ReactNode,
	useEffect,
	useId,
	useState,
} from 'react';
import { cssBool, cssClass } from '../../../helpers/cssClass.helper';
import classes from './OptionalInput.module.scss';

type Props = {
	children: ReactNode;
	onHide: () => void;
	label: string;
};

export const OptionalInput = ({ children, onHide, label }: Props) => {
	const [active, setActive] = useState(false);

	const checkboxLabel = useId();

	const checkboxChangeHandler = (event) => {
		event.preventDefault();
		setActive(!active);
	};

	const enterKeydownHandler = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			setActive(!active);
		}
	};

	useEffect(() => {
		if (!active) {
			onHide();
		}
	}, [active]);

	const circleClasses = cssClass(
		classes.circle,
		cssBool(active, classes.circleChecked)
	);

	return (
		<>
			<button onClick={checkboxChangeHandler} className={classes.root}>
				<label className={classes.label} htmlFor={checkboxLabel}>
					<span>{label}</span>
				</label>
				<div className={classes.controls}>
					<input
						className={classes.check}
						type='checkbox'
						id={checkboxLabel}
						onChange={checkboxChangeHandler}
						value={active ? 1 : 0}
					></input>
					<label className={circleClasses} htmlFor={checkboxLabel}></label>
				</div>
			</button>
			{active && children}
		</>
	);
};
