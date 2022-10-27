import * as Select from '@radix-ui/react-select'

import { styled } from '@stitches/react'

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

type Props = {
  value: string
  onChange: (value: string) => void
  labelOnOpen: string
  options: string[]
  buttonLabel: string
  buttonText: string
}

export const SelectUI = ({
  labelOnOpen,
  onChange,
  options,
  value,
  buttonLabel,
  buttonText,
}: Props) => {
  const SelectItems = (
    <Select.Viewport>
      <Select.Group>
        <Select.Label>{labelOnOpen}</Select.Label>
        {options.map((option) => (
          <StyledItem value={option} key={option}>
            <Select.ItemText>{option}</Select.ItemText>
          </StyledItem>
        ))}
      </Select.Group>
    </Select.Viewport>
  )

  const SelectContent = (
    <StyledContent>
      <Select.ScrollUpButton />
      {SelectItems}
      <Select.ScrollDownButton />
    </StyledContent>
  )

  return (
    <Select.Root onValueChange={onChange} value={value}>
      <Select.Trigger aria-label={buttonLabel}>
        <Select.Value placeholder={buttonText} />
        <Select.Icon />
      </Select.Trigger>
      {SelectContent}
    </Select.Root>
  )
}
