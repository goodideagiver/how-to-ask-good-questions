import create from 'zustand'
import { getFormattedMessage } from './messageFormatters'

export type Message = {
  question: string
  answer: string
}

export enum MessageFormatting {
  boldHeadings = 'boldHeadings',
  headingsAsHeadings = 'headingsAsHeadings',
  onlyNewLines = 'onlyNewLines',
}

type MessageState = {
  formatting: MessageFormatting
  messages: Message[]
  setMessages: (messages: Message[]) => void
  setFormatting: (formatting: MessageFormatting) => void
  formattedMessage: () => string
}

export const useMessageStore = create<MessageState>()((set, get) => ({
  messages: [],
  formatting: MessageFormatting.boldHeadings,
  setMessages: (messages) => set({ messages }),
  setFormatting: (formatting) => {
    set({ formatting })
  },
  formattedMessage: () => getFormattedMessage(get().messages, get().formatting),
}))
