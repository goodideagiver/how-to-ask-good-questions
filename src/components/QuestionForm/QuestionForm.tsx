import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormProgress } from '../FormProgress/FormProgress';
import { WindowLayout } from '../WindowLayout/WindowLayout';
import { FormControls } from './FormControls/FormControls';
import { FormOutput } from './FormOutput/FormOutput';
import { FormTextarea } from './FormTextarea/FormTextarea';
import { FormTextareas, textareasCount } from './FormTextareas/FormTextareas';
import { OptionalInput } from './OptionalInput/OptionalInput';
import { useQuestionForm } from './QuestionForm.hook';
import classes from './QuestionForm.module.scss';
import { QuestionMarks } from './QuestionMarks/QuestionMarks';
import '/src/config';

export const QuestionForm = () => {
	const {
		questionInputsState,
		removeInput,
		setInputValue,
		resetFormHandler,
		message,
		hasMessage,
	} = useQuestionForm();

	const copyMessageHanlder = () => {
		try {
			if (!hasMessage) throw new Error('No message to copy');
			navigator.clipboard.writeText(message);
		} catch (error) {
			alert('Could not copy message to clipboard.');
		}
	};

	const { t } = useTranslation();

	useEffect(() => {
		resetFormHandler();
	}, [t]);

	return (
		<WindowLayout>
			<QuestionMarks />
			<form className={classes.root}>
				<FormProgress
					percentage={
						(Object.keys(questionInputsState).length / textareasCount) * 100
					}
				/>
				<FormTextareas
					onEmptyInput={removeInput}
					onChange={setInputValue}
					questionInputsState={questionInputsState}
				/>
				<OptionalInput
					label={t('usedTechnologies')}
					onHide={() => removeInput('technologies')}
				>
					<FormTextarea
						onEmptyInput={() => removeInput('technologies')}
						animate={true}
						label={t('inputs.technologies.label')}
						placeholder={t('inputs.technologies.placeholder')}
						value={questionInputsState?.technologies?.value || ''}
						onChange={setInputValue}
						objectKey='technologies'
					/>
				</OptionalInput>
				<FormControls
					copyMessageHanlder={copyMessageHanlder}
					resetFormHandler={resetFormHandler}
				/>
			</form>
			<FormOutput hasMessage={!!hasMessage} message={message} />
		</WindowLayout>
	);
};
