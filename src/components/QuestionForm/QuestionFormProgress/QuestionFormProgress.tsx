import { useRef } from 'react'
import { cssBool, cssClass } from '../../../helpers/cssClass.helper'
import { useOnScreen } from '../../../hooks/useOnScreen.hook'
import { FormProgress } from '../../FormProgress/FormProgress'
import { useIsMobile } from '../../FormProgress/useIsMobile.hook'

import classes from './QuestionFormProgress.module.scss'

type Props = {
  percentage: number
}

const MIN_WIDTH_MOBILE = 800

export const QuestionFormProgress = ({ percentage }: Props) => {
  const progressRef = useRef<HTMLDivElement>(null)

  const isMobile = useIsMobile(MIN_WIDTH_MOBILE)
  const isOnScreen = useOnScreen(progressRef, '-40px')
  const shouldFloat = !isMobile && !isOnScreen
  return (
    <>
      <div ref={progressRef} className={classes.floating}>
        <FormProgress percentage={percentage} />
      </div>
      {!isMobile && (
        <div
          className={cssClass(
            classes.scrolled,
            cssBool(shouldFloat, classes.visible)
          )}
        >
          <FormProgress percentage={percentage} />
        </div>
      )}
    </>
  )
}
