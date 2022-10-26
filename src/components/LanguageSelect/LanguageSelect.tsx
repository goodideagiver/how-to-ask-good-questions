/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next'
import { DECLARED_LANGUAGES } from '../../config'

import * as Select from '@radix-ui/react-select'

import { styled } from '@stitches/react'
import { useLanguageSelect } from './useLanguageSelect'

const StyledContent = styled(Select.Content, {
  width: '100%',
  backgroundColor: 'rgb(44, 47, 51)',
  borderRadius: '8px',
  border: '1px solid #121212',
  boxShadow: '0 0 5px #121212',
  overflow: 'hidden',
})

const StyledItem = styled(Select.Item, {
  padding: '1rem 2rem',
  backgroundColor: 'rgb(44, 47, 51)',
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#202225',
    color: 'white',
    outline: 'none',
    border: 'none',
  },
})

export const LanguageSelect = () => {
  const { t } = useTranslation()

  const { selectHandler, selectValue } = useLanguageSelect()

  const LanguageOptions = DECLARED_LANGUAGES.map((lang) => (
    <StyledItem value={lang} key={lang}>
      <Select.ItemText>{lang.toUpperCase()}</Select.ItemText>
    </StyledItem>
  ))

  const SelectContent = (
    <StyledContent>
      <Select.ScrollUpButton />
      <Select.Viewport>
        <Select.Group>
          <Select.Label>{t('chooseLanguage')}</Select.Label>
          {LanguageOptions}
        </Select.Group>
      </Select.Viewport>
      <Select.ScrollDownButton />
    </StyledContent>
  )

  return (
    <Select.Root onValueChange={selectHandler} value={selectValue}>
      <Select.Trigger aria-label='language select'>
        <Select.Value placeholder={t('chooseLanguage')} />
        <Select.Icon />
      </Select.Trigger>
      {SelectContent}
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
