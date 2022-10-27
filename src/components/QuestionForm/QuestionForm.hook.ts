import { useReducer } from 'react'
import { useMessageStore } from '../../store/message-store'

export type FormInput = {
  [key: string]: {
    value: string
    name: string
    touched: boolean
  }
}

export enum FormActionTypes {
  SET_INPUT_VALUE = 'SET_INPUT_VALUE',
  REMOVE_INPUT_VALUE = 'REMOVE_INPUT_VALUE',
  RESET_FORM = 'RESET_FORM',
}

export type SetInputValue = (name: string, value: string, key: string) => void

export interface FormAction {
  type: FormActionTypes
  payload: {
    objectKey: string
    name: string
    value: string
    touched: boolean
  }
}

const initalState: FormInput = {}

const messageReducer = (state: FormInput, action: FormAction) => {
  if (action.type === FormActionTypes.SET_INPUT_VALUE) {
    return {
      ...state,
      [action.payload.objectKey]: {
        name: action.payload.name,
        value: action.payload.value,
        touched: action.payload.value.trim().length > 0,
      },
    }
  }

  if (action.type === FormActionTypes.RESET_FORM) {
    return {}
  }

  if (action.type === FormActionTypes.REMOVE_INPUT_VALUE) {
    if (!state.hasOwnProperty(action.payload.objectKey)) return state

    const stateCopy = { ...state }
    delete stateCopy[action.payload.objectKey]
    return stateCopy
  }

  return state
}

export const useQuestionForm = () => {
  const [state, dispatch] = useReducer(messageReducer, initalState)

  const setInputValue = (name: string, value: string, key: string) => {
    dispatch({
      type: FormActionTypes.SET_INPUT_VALUE,
      payload: {
        name,
        value,
        objectKey: key,
        touched: true,
      },
    })
  }

  const removeInput = (key: string) => {
    dispatch({
      type: FormActionTypes.REMOVE_INPUT_VALUE,
      payload: {
        objectKey: key,
        name: '',
        value: '',
        touched: true,
      },
    })
  }

  const resetFormHandler = () => {
    dispatch({
      type: FormActionTypes.RESET_FORM,
      payload: {
        name: '',
        value: '',
        objectKey: '',
        touched: false,
      },
    })
  }

  const setMessages = useMessageStore((state) => state.setMessages)

  const messages = Object.values(state).filter(
    (el) => el.value && el.value.trim() !== ''
  )

  const messagesToSet = messages.map((message) => ({
    question: message.name,
    answer: message.value,
  }))

  const hasMessage = messagesToSet.length > 0

  setMessages(messagesToSet)

  return {
    questionInputsState: state,
    setInputValue,
    resetFormHandler,
    removeInput,
    hasMessage,
  }
}
