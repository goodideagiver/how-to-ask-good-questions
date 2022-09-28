import { ReactNode } from 'react';
import { CheckboxLabel } from './CheckboxLabel';
import { InputControls } from './InputControls';
import { useOptionalInput } from './OptionalInput.hook';
import classes from './OptionalInput.module.scss';

type Props = {
	children: ReactNode;
	onHide: () => void;
	label: string;
};

export const OptionalInput = ({ children, onHide, label }: Props) => {
	const {
		checkboxChangeHandler,
		checkboxId,
		childrenIsVisible,
		labelButtonClickHandler,
	} = useOptionalInput(onHide);

	return (
		<>
			<button onClick={labelButtonClickHandler} className={classes.root}>
				<CheckboxLabel checkboxId={checkboxId} label={label} />
				<InputControls
					checkboxChangeHandler={checkboxChangeHandler}
					checkboxId={checkboxId}
					childrenIsVisible={childrenIsVisible}
				/>
			</button>
			{childrenIsVisible && children}
		</>
	);
};
