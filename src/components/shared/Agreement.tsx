import { css } from '@emotion/react'
import Flex from './Flex'
import { Text } from './Text'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { colors } from 'styles/colorPalatte'
import { MouseEvent } from 'react'
export function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" as="ul" css={agreementContainerStyles}>
      {children}
    </Flex>
  )
}

function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, ischecked: boolean) => void
}) {
  return (
    <Flex as="li" onClick={(e) => onChange(e, !checked)}>
      <IconCheck checked={checked} />
      <Text bold={true}>{children}</Text>
    </Flex>
  )
}

function AgreementDescription({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode
  checked: boolean
  link?: string
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li">
      <Flex onClick={(e) => onChange(e, !checked)}>
        <IconCheck checked={checked} />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link !== null ? (
        <a href={link} target="noreferrer">
          <Text typography="t6">링크</Text>
        </a>
      ) : null}
    </Flex>
  )
}

Agreement.Title = AgreementTitle
Agreement.Description = AgreementDescription

function IconCheck({
  checked,
  withCircle = false,
}: {
  checked: boolean
  withCircle?: boolean
}) {
  return (
    <FaRegCheckCircle
      css={IconSize}
      fill={checked ? colors.blue : colors.gray}
    />
  )
}

const IconSize = css`
  width: 24px;
  height: 24px;
`

const agreementContainerStyles = css`
  padding: 24px;

  & li {
    cursor: pointer;
  }
`
/*

<Agreement>
<Agreement.Title >{children}</Agreement.Title>

<Agreement.description></Agreement.description>

</Agreement>

*/
