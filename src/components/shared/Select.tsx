import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import { colors } from 'styles/colorPalatte'
import Flex from './Flex'
import { Text } from './Text'
import { Option } from 'constants/apply'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Option[]
  placeholder?: string
  value?: string
}

const BaseSelect = styled.select`
  height: 52px;
  background: ${colors.gray};
  border: none;
  border-radius: 15px;
  padding: 0 16px;
  cursor: pointer;

  &:required:invalid {
    color: ${colors.gray100};
  }
`

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      {label ? (
        <Text
          typography="t7"
          style={{ marginBottom: 6 }}
          display="inline-block"
          color="black"
        >
          {label}
        </Text>
      ) : null}
      <BaseSelect required={true} ref={ref} value={value} {...props}>
        <option disabled={true} hidden={true} value="">
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  )
})

export default Select
