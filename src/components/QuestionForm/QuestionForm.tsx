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
				placeholder='React - useState not synchronized with input change'
				value={questionInputsState?.topic?.value || ''}
				onChange={setInputValue}
				objectKey='topic'
			/>
			<OptionalInput onHide={() => setInputValue('', '', 'technologies')}>
				<FormTextarea
					label='Used technologies that concern the question'
					placeholder='Redux, React, Typescript'
					value={questionInputsState?.technologies?.value || ''}
					onChange={setInputValue}
					objectKey='technologies'
				/>
			</OptionalInput>
			<FormTextarea
				label='What should be happening vs what is happening'
				placeholder='When I input the message, and click the copy button, the message should be copied to the clipboard, but it is empty.'
				value={questionInputsState?.problem?.value || ''}
				onChange={setInputValue}
				objectKey='problem'
			/>
			<FormTextarea
				label='What did you try to solve the problem?'
				placeholder='I tried to solve the problem by using the useState hook.'
				value={questionInputsState?.example?.value || ''}
				onChange={setInputValue}
				objectKey='example'
			/>
			<FormTextarea
				label='What sources did you read in order to solve the problem?'
				placeholder='https://reactjs.org/docs/hooks-reference.html'
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
