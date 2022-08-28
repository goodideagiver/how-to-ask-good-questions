import { useReducer } from 'react';
import { FormTextarea } from './FormTextarea/FormTextarea';
import { OptionalInput } from './OptionalInput/OptionalInput';
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
			<OptionalInput>
				<FormTextarea
					label='Used technologies'
					placeholder='Eg. React - useState not synchronized with input change'
					value=''
					onChange={() => console.log('changed')}
				/>
			</OptionalInput>
			<FormTextarea
				label='Describe the problem'
				placeholder='Eg. React - useState not synchronized with input change'
				value=''
				onChange={() => console.log('changed')}
			/>
			<FormTextarea
				label='Concrete example'
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
			<div>
				<button>Copy the message</button>
				<button>Reset</button>
			</div>
		</form>
	);
};
