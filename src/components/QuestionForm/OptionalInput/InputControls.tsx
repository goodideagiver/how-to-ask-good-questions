import { ChecboxCircleIndicator } from './ChecboxCircleIndicator';
import { Checkbox } from './Checkbox';

import classes from './InputControls.module.scss';

type Props = {
	checkboxChangeHandler: () => void;
	checkboxId: string;
	childrenIsVisible: boolean;
};

export const InputControls = ({
	checkboxId,
	childrenIsVisible,
	checkboxChangeHandler,
}: Props) => {
	return (
		<div className={classes.controls}>
			<Checkbox
				checkboxId={checkboxId}
				value={childrenIsVisible}
				checkboxChangeHandler={checkboxChangeHandler}
			/>
			<ChecboxCircleIndicator
				checkboxLabel={checkboxId}
				checked={childrenIsVisible}
			/>
		</div>
	);
};
