import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';
import { FormTextarea } from './FormTextarea/FormTextarea';
import { OptionalInput } from './OptionalInput/OptionalInput';
import { useQuestionForm } from './QuestionForm.hook';
import classes from './QuestionForm.module.scss';
import '/public/config';

export const QuestionForm = () => {
	const { questionInputsState, setInputValue, resetFormHandler, message } =
		useQuestionForm();

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
		<form className={classes.root}>
			<FormTextarea
				label={t('inputs.topic.label')}
				placeholder={t('inputs.topic.placeholder')}
				value={questionInputsState?.topic?.value || ''}
				onChange={setInputValue}
				objectKey='topic'
			/>
			<OptionalInput
				label={t('usedTechnologies')}
				onHide={() => setInputValue('', '', 'technologies')}
			>
				<FormTextarea
					label={t('inputs.technologies.label')}
					placeholder={t('inputs.technologies.placeholder')}
					value={questionInputsState?.technologies?.value || ''}
					onChange={setInputValue}
					objectKey='technologies'
				/>
			</OptionalInput>
			<FormTextarea
				label={t('inputs.expected.label')}
				placeholder={t('inputs.expected.placeholder')}
				value={questionInputsState?.expected?.value || ''}
				onChange={setInputValue}
				objectKey='expected'
			/>
			<FormTextarea
				label={t('inputs.whatTried.label')}
				placeholder={t('inputs.whatTried.placeholder')}
				value={questionInputsState?.whatTried?.value || ''}
				onChange={setInputValue}
				objectKey='whatTried'
			/>
			<FormTextarea
				label={t('inputs.sources.label')}
				placeholder={t('inputs.sources.placeholder')}
				value={questionInputsState?.sources?.value || ''}
				onChange={setInputValue}
				objectKey='sources'
			/>
			<div className={classes.controls}>
				<button onClick={copyMessageHanlder} type='button'>
					{t('mainButtons.copy')}
				</button>
				<button type='button' onClick={resetFormHandler}>
					{t('mainButtons.reset')}
				</button>
				<LanguageSelect />
			</div>
			{message && message.trim().length && (
				<div>
					<p>Oputput:</p>
					<p className={classes.output}>
						<ReactMarkdown>{message}</ReactMarkdown>
					</p>
				</div>
			)}
		</form>
	);
};
