import { useTranslation } from 'react-i18next'
import { MessageFormatting, useMessageStore } from '../../store/message-store'
import { SelectUI } from '../../UI/Select'

export const FormattingSelect = () => {
  const { formatting, setFormatting } = useMessageStore((state) => {
    return {
      formatting: state.formatting,
      setFormatting: state.setFormatting,
    }
  })

  const { t } = useTranslation()

  const translatedOptions = Object.values(MessageFormatting).map(
    (formatting) => {
      return {
        original: formatting,
        translated: t(`mainButtons.formatting.${formatting}`),
      }
    }
  )
  const selectHandler = (newFormatting: string) => {
    const originalOption = translatedOptions.find(
      (option) => option.translated === newFormatting
    )
    if (originalOption) {
      setFormatting(originalOption.original)
    }
  }

  const label = t('chooseFormatting')

  return (
    <SelectUI
      value={t(`mainButtons.formatting.${formatting}`)}
      options={translatedOptions.map((option) => option.translated)}
      buttonLabel={label}
      buttonText={label}
      labelOnOpen={label}
      onChange={selectHandler}
    />
  )
}
