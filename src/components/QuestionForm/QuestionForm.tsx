import { FormTextarea } from './FormTextarea/FormTextarea';
import classes from './QuestionForm.module.scss';

export const QuestionForm = () => {
	return (
		<form className={classes.root}>
			<FormTextarea
				label='Question topic'
				placeholder='Eg. React - useState not synchronized with input change'
				value=''
				onChange={() => console.log('changed')}
			/>
			<FormTextarea
				label='Describe the problem'
				placeholder='Eg. React - useState not synchronized with input change'
				value=''
				onChange={() => console.log('changed')}
			/>
			<FormTextarea
				label='What did you try already to solve the problem?'
				placeholder='Eg. React - useState not synchronized with input change'
				value=''
				onChange={() => console.log('changed')}
			/>
			<button>Copy the message</button>
		</form>
	);
};
