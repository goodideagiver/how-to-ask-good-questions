/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next'
import { DECLARED_LANGUAGES } from '../../config'

import { SelectUI } from '../../UI/Select'
import { useLanguageSelect } from './useLanguageSelect'

export const LanguageSelect = () => {
  const { t } = useTranslation()

  const { selectHandler, selectValue } = useLanguageSelect()

  const options = DECLARED_LANGUAGES.map((lang) => lang.toLocaleLowerCase())

  return (
    <SelectUI
      options={options}
      buttonLabel={t('chooseLanguage')}
      labelOnOpen={t('chooseLanguage')}
      buttonText={t('chooseLanguage')}
      onChange={selectHandler}
      value={selectValue}
    />
  )
}
