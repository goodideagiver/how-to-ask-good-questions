import { useTranslation } from 'react-i18next'
import { FormattingSelect } from '../../FormattingSelect/FormattingSelect'
import { LanguageSelect } from '../../LanguageSelect/LanguageSelect'
import classes from './FormControls.module.scss'
import { useCopyButtonState } from './useCopyButtonState.hook'
import { useCopyHandler } from './useCopyHandler.hook'

import { Tooltip } from '@chakra-ui/react'

export enum CopyState {
  Error,
  Success,
  Default,
}

type Props = {
  resetFormHandler: () => void
  hasMessage: boolean
  message: string
}
export const FormControls = ({
  resetFormHandler,
  hasMessage,
  message,
}: Props) => {
  const { t } = useTranslation()

  const { copyMessageHandler, copyState, resetCopyButtonState } =
    useCopyHandler(hasMessage, message)

  const { buttonClassNames, buttonText } = useCopyButtonState(
    copyState,
    resetCopyButtonState
  )

  return (
    <div className={classes.controls}>
      <Tooltip
        hasArrow
        label={t('copyMessage.click')}
        fontSize='md'
        backgroundColor={'black'}
        borderRadius={'md'}
      >
        <button
          className={buttonClassNames}
          onClick={copyMessageHandler}
          type='button'
        >
          {buttonText}
        </button>
      </Tooltip>
      <Tooltip
        hasArrow
        label={t('mainButtons.resetTooltip')}
        fontSize='md'
        backgroundColor={'black'}
        borderRadius={'md'}
      >
        <button type='button' onClick={resetFormHandler}>
          {t('mainButtons.reset')}
        </button>
      </Tooltip>
      <LanguageSelect />
      <FormattingSelect />
    </div>
  )
}
