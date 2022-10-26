/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next'
import { DECLARED_LANGUAGES } from '../../config'

import * as Select from '@radix-ui/react-select'

import { useLanguageSelect } from './useLanguageSelect'

export const LanguageSelect = () => {
  const { t } = useTranslation()

  const { selectHandler, selectRef } = useLanguageSelect()

  const LanguageOptions = DECLARED_LANGUAGES.map((lang) => (
    <Select.Item value={lang} key={lang}>
      <Select.ItemText>{lang}</Select.ItemText>
    </Select.Item>
  ))

  return (
    <Select.Root>
      <Select.Trigger aria-label='language select'>
        <Select.Value placeholder={t('chooseLanguage')} />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>{LanguageOptions}</Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

// return (
//   <div>
//     <label htmlFor='lang-select'>{t('chooseLanguage')}:</label>
//     <Select></Select>{' '}
//     <option disabled value=''>
//       --Please choose an option--
//     </option>
//     {LanguageOptions}
//     <select
//       ref={selectRef}
//       className={classes.input}
//       onChange={selectHandler}
//       name='languages'
//       id='lang-select'
//     >
//       <option disabled value=''>
//         --Please choose an option--
//       </option>
//       {LanguageOptions}
//     </select>
//   </div>
// )
