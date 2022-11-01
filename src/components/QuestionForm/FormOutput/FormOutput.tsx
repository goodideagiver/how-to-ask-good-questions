import { useToast } from '@chakra-ui/toast'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import { cssBool, cssClass } from '../../../helpers/cssClass.helper'
import { useMessageStore } from '../../../store/message-store'

import classes from './FormOutput.module.scss'

import { Tooltip } from '@chakra-ui/react'

type Props = {
  hasMessage: boolean
  message: string
}

export const FormOutput = ({ hasMessage, message }: Props) => {
  const { t } = useTranslation()
  const toast = useToast()

  const formattedMessage = useMessageStore((state) => state.formattedMessage)

  const outputCss = cssClass(classes.right, cssBool(!message, classes.hidden))

  const copyButtonHandler = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage())
      toast({
        title: t('copyMessage.success.title'),
        description: t('copyMessage.success.message'),
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: t('copyMessage.error.title'),
        description: t('copyMessage.error.message'),
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  return (
    <div className={outputCss}>
      <p className={classes['output-title']}>{t('outputPreview')}:</p>
      <div className={classes.output}>
        {hasMessage ? (
          <Tooltip
            hasArrow
            label={t('copyMessage.click')}
            fontSize='md'
            backgroundColor={'black'}
            borderRadius={'md'}
          >
            <button onClick={copyButtonHandler} className={classes.button}>
              <ReactMarkdown className={classes.markdown}>
                {message}
              </ReactMarkdown>
            </button>
          </Tooltip>
        ) : (
          <p className={classes.empty}>{t('noData')}</p>
        )}
      </div>
    </div>
  )
}
