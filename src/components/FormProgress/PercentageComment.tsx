import { useTranslation } from 'react-i18next'
import classes from './PercentageComment.module.scss'

type Props = {
  maxPercentage: number
  percentage: number
}
export const PercentageComment = ({ maxPercentage, percentage }: Props) => {
  const { t } = useTranslation()

  const completionComment = t('completionComment')

  const overcompletionComment = t('overcompletionComment')

  if (percentage === maxPercentage) {
    return (
      <div data-testid='test-completion' className={classes.comment}>
        {completionComment.split('').map((letter, index) => (
          <span
            className={`${letter === ' ' ? classes.space : ''}`}
            key={letter + index + 'complete'}
            style={{ animationDelay: index * 0.1 + 0.5 + 's' }}
          >
            {letter}
          </span>
        ))}
      </div>
    )
  }

  if (percentage > maxPercentage) {
    return (
      <div data-testid='test-completion' className={classes.comment}>
        {overcompletionComment.split('').map((letter, index) => (
          <span
            className={`${letter.trim() === '' ? classes.space : ''}`}
            key={letter + index + 'over'}
            style={{ animationDelay: index * 0.1 + 0.5 + 's' }}
          >
            {letter}
          </span>
        ))}
      </div>
    )
  }

  return null
}
