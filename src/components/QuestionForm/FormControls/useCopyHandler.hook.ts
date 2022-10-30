import { useState } from 'react'
import { CopyState } from './FormControls'

export const useCopyHandler = (hasMessage: boolean, message: string) => {
  const [copyState, setCopyState] = useState(CopyState.Default)

  const resetCopyButtonState = () => {
    setCopyState(CopyState.Default)
  }

  const copyMessageHandler = () => {
    try {
      if (!hasMessage) throw new Error('No message to copy')
      navigator.clipboard.writeText(message)
      setCopyState(CopyState.Success)
    } catch (error) {
      setCopyState(CopyState.Error)
    }
  }

  return {
    copyState,
    copyMessageHandler,
    resetCopyButtonState,
  }
}
