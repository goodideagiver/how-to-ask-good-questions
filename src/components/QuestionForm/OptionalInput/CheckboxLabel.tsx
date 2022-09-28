import classes from './OptionalInput.module.scss';

type Props = {
	label: string;
	checkboxId: string;
};

export const CheckboxLabel = ({ checkboxId, label }: Props) => (
	<label className={classes.label} htmlFor={checkboxId}>
		<span>{label}</span>
	</label>
);
