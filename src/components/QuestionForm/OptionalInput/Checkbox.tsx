import { ChangeEvent } from 'react';

import classes from './Checkbox.module.scss';

type Props = {
	checkboxId: string;
	value: boolean;
	checkboxChangeHandler: (event: ChangeEvent) => void;
};

export const Checkbox = ({
	checkboxId,
	checkboxChangeHandler,
	value,
}: Props) => {
	return (
		<input
			className={classes.check}
			type='checkbox'
			id={checkboxId}
			onChange={checkboxChangeHandler}
			value={value ? 1 : 0}
		></input>
	);
};
