import { Message, MessageFormatting } from './message-store'

const getFormattedLine = (
  question: string,
  answer: string,
  formatting: MessageFormatting
) => {
  if (formatting === MessageFormatting.headingsAsHeadings) {
    return `## ${question}\n${answer}`
  }
  if (formatting === MessageFormatting.onlyNewLines) {
    return `${question}\n${answer}`
  }
  return `**${question}**\n${answer}`
}

export const getFormattedMessage = (
  messages: Message[],
  formatting: MessageFormatting
): string => {
  return messages
    .map((message) => {
      const { question, answer } = message
      return getFormattedLine(question, answer, formatting)
    })
    .join('\n\n')
}
