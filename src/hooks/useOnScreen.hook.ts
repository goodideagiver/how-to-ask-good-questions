import { RefObject, useEffect, useState } from 'react'

export const useOnScreen = <T extends HTMLElement>(
  ref: RefObject<T>,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}
