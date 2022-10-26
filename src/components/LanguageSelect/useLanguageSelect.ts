import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage.hook'

export const useLanguageSelect = () => {
  const [selectValue, setSelectValue] = useState('')

  const { setItem, value } = useLocalStorage('language')

  const langChangeHandler = (lang: string) => {
    i18next.changeLanguage(lang)
    setItem(lang)
  }

  const selectHandler = (newLang: string) => {
    if (newLang.trim().length > 0) {
      langChangeHandler(newLang)
    }
  }

  useEffect(() => {
    if (value) {
      setSelectValue(value)
      langChangeHandler(value)
    }
  }, [value])

  return { selectHandler, selectValue }
}
