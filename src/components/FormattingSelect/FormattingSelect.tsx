import { MessageFormatting, useMessageStore } from '../../store/message-store'
import { SelectUI } from '../../UI/Select'

export const FormattingSelect = () => {
  const { formatting, setFormatting } = useMessageStore((state) => {
    return {
      formatting: state.formatting,
      setFormatting: state.setFormatting,
    }
  })

  const selectHandler = (newFormatting: string) => {
    setFormatting(newFormatting as MessageFormatting)
  }

  return (
    <SelectUI
      value={formatting}
      options={Object.values(MessageFormatting)}
      buttonLabel='Set formatting'
      buttonText='Set formatting'
      labelOnOpen='Formatting'
      onChange={selectHandler}
    />
  )
}
