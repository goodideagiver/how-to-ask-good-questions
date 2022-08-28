import { FormTextarea } from './FormTextarea/FormTextarea';
import { OptionalInput } from './OptionalInput/OptionalInput';
import { useQuestionForm } from './QuestionForm.hook';
import classes from './QuestionForm.module.scss';

export const QuestionForm = () => {
	const { questionInputsState, setInputValue, resetFormHandler } =
		useQuestionForm();

	return (
		<form className={classes.root}>
			<FormTextarea
				label='Question topic'
				placeholder='Eg. React - useState not synchronized with input change'
				value={questionInputsState?.topic?.value || ''}
				onChange={setInputValue}
				objectKey='topic'
			/>
			<OptionalInput onHide={() => setInputValue('', '', 'technologies')}>
				<FormTextarea
					label='Used technologies'
					placeholder='Eg. React - useState not synchronized with input change'
					value={questionInputsState?.technologies?.value || ''}
					onChange={setInputValue}
					objectKey='technologies'
				/>
			</OptionalInput>
			<FormTextarea
				label='Describe the problem'
				placeholder='Eg. React - useState not synchronized with input change'
				value={questionInputsState?.problem?.value || ''}
				onChange={setInputValue}
				objectKey='problem'
			/>
			<FormTextarea
				label='Concrete example'
				placeholder='Eg. React - useState not synchronized with input change'
				value={questionInputsState?.example?.value || ''}
				onChange={setInputValue}
				objectKey='example'
			/>
			<FormTextarea
				label='What did you try already to solve the problem?'
				placeholder='Eg. React - useState not synchronized with input change'
				value={questionInputsState?.solution?.value || ''}
				onChange={setInputValue}
				objectKey='solution'
			/>
			<div>
				<button type='button'>Copy the message</button>
				<button type='button' onClick={resetFormHandler}>
					Reset
				</button>
			</div>
		</form>
	);
};
