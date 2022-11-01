import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useMessageStore } from '../../store/message-store'
import { MAX_PERCENTAGE } from '../FormProgress/FormProgress'
import { WindowLayout } from '../WindowLayout/WindowLayout'
import { FormControls } from './FormControls/FormControls'
import { FormOutput } from './FormOutput/FormOutput'
import { FormTextarea } from './FormTextarea/FormTextarea'
import { FormTextareas, textareasCount } from './FormTextareas/FormTextareas'
import { OptionalInput } from './OptionalInput/OptionalInput'
import { useQuestionForm } from './QuestionForm.hook'
import classes from './QuestionForm.module.scss'
import { QuestionFormProgress } from './QuestionFormProgress/QuestionFormProgress'
import { QuestionMarks } from './QuestionMarks/QuestionMarks'
import '/src/config'

export const QuestionForm = () => {
  const {
    questionInputsState,
    removeInput,
    setInputValue,
    resetFormHandler,
    hasMessage,
  } = useQuestionForm()

  const { t } = useTranslation()

  const getFormattedMessage = useMessageStore((state) => state.formattedMessage)
  const formatting = useMessageStore((state) => state.formatting)

  let message = getFormattedMessage()
  useEffect(() => {
    //this is bad code but it works
    message = getFormattedMessage()
  }, [formatting, questionInputsState])

  const fields = questionInputsState && Object.values(questionInputsState)

  const hasFields = fields && fields.length > 0

  const filledFieldsCount: number = hasFields
    ? fields.filter((field) => field.value && field.value.trim()).length
    : 0

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <WindowLayout>
      <QuestionMarks />
      <form ref={formRef} className={classes.root}>
        <QuestionFormProgress
          percentage={(filledFieldsCount / textareasCount) * MAX_PERCENTAGE}
        />
        <FormTextareas
          onChange={setInputValue}
          questionInputsState={questionInputsState}
        />
        <OptionalInput
          label={t('usedTechnologies')}
          onHide={() => removeInput('technologies')}
        >
          <FormTextarea
            animate={true}
            label={t('inputs.technologies.label')}
            placeholder={t('inputs.technologies.placeholder')}
            value={questionInputsState?.technologies?.value || ''}
            onChange={setInputValue}
            objectKey='technologies'
          />
        </OptionalInput>
        <FormControls
          hasMessage={!!hasMessage}
          message={message}
          resetFormHandler={resetFormHandler}
        />
      </form>

      <FormOutput hasMessage={!!hasMessage} message={message} />
    </WindowLayout>
  )
}
