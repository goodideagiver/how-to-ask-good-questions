import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { FormProgress } from '../FormProgress/FormProgress';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import { WindowLayout } from '../WindowLayout/WindowLayout';
import { FormTextarea } from './FormTextarea/FormTextarea';
import { FormTextareas, textareasCount } from './FormTextareas/FormTextareas';
import { OptionalInput } from './OptionalInput/OptionalInput';
import { useQuestionForm } from './QuestionForm.hook';
import classes from './QuestionForm.module.scss';
import { QuestionMarks } from './QuestionMarks/QuestionMarks';
import '/public/config';

export const QuestionForm = () => {
	const {
		questionInputsState,
		removeInput,
		setInputValue,
		resetFormHandler,
		message,
	} = useQuestionForm();

	const copyMessageHanlder = () => {
		try {
			if (!message || message.trim().length === 0)
				throw new Error('No message to copy');
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
				<div className={classes.controls}>
					<button onClick={copyMessageHanlder} type='button'>
						{t('mainButtons.copy')}
					</button>
					<button type='button' onClick={resetFormHandler}>
						{t('mainButtons.reset')}
					</button>
					<LanguageSelect />
				</div>
			</form>
			<div className={classes.right}>
				<p>{t('outputPreview')}:</p>
				<p className={classes.output}>
					{message && message.trim().length ? (
						<ReactMarkdown className={classes.markdown}>
							{message}
						</ReactMarkdown>
					) : (
						<p className={classes.empty}>{t('noData')}</p>
					)}
				</p>
			</div>
		</WindowLayout>
	);
};
