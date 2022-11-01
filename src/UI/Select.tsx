import * as Select from '@radix-ui/react-select'

import { styled } from '@stitches/react'

import { Tooltip } from '@chakra-ui/react'

const StyledGroupLabel = styled(Select.Label, {
  padding: '0.5rem 0',
  fontWeight: 'bold',
  borderBottom: '1px solid #121212',
  color: '#505050',
  marginBottom: '0.5rem',
})

const StyledContent = styled(Select.Content, {
  width: '100%',
  backgroundColor: 'rgb(44, 47, 51)',
  borderRadius: '8px',
  border: '1px solid #121212',
  boxShadow: '0 0 5px #121212',
  overflow: 'hidden',
  padding: '0 0.5rem',
  paddingBottom: '0.5rem',
})

const StyledItem = styled(Select.Item, {
  padding: '0.5rem 1rem',
  borderRadius: '8px',
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
        <StyledGroupLabel>{labelOnOpen}</StyledGroupLabel>
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
      <Tooltip
        hasArrow
        label={buttonText}
        fontSize='md'
        backgroundColor={'black'}
        borderRadius={'md'}
      >
        <Select.Trigger aria-label={buttonLabel}>
          <Select.Value placeholder={buttonText} />
          <Select.Icon />
        </Select.Trigger>
      </Tooltip>
      {SelectContent}
    </Select.Root>
  )
}
