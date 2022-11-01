import { useEffect, useState } from 'react'
import { Portal } from '../../HOC/Portal/Portal'
import classes from './FormProgress.module.scss'
import { formClassesHelper } from './formProgressClasses.helper'
import { ProgressBar } from './ProgressBar'
import { useIsMobile } from './useIsMobile.hook'

type Props = {
  percentage: number
}

export const MAX_PERCENTAGE = 100
export const MAX_PIXELS_WIDTH = 800
const MILLISECONDS_CHECK_INTERVAL = 100

export const FormProgress = ({ percentage }: Props) => {
  const [progressTopPosition, setProgressTopPosition] = useState('0')
  const { classNames } = formClassesHelper(MAX_PERCENTAGE, percentage)

  const isMobile = useIsMobile(MAX_PIXELS_WIDTH)

  useEffect(() => {
    if (!isMobile) return
    const scrollHandler = () => {
      const correctionAmount = window.visualViewport?.offsetTop || 0

      setProgressTopPosition((prev) => {
        if (Number(prev) === correctionAmount) return prev
        return correctionAmount.toFixed(0)
      })
    }
    window.addEventListener('scroll', scrollHandler)
    const interval = setInterval(scrollHandler, MILLISECONDS_CHECK_INTERVAL)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
      clearInterval(interval)
    }
  }, [isMobile])

  const Progress = (
    <div
      className={classNames}
      style={{
        transform: `translate3d(0, ${progressTopPosition}px, 0)`,
        transition: '0.1s ease-in-out',
      }}
    >
      <div className={classes.progWrapper}>
        <ProgressBar percentage={percentage} />
      </div>
    </div>
  )

  return isMobile ? <Portal>{Progress}</Portal> : Progress
}
