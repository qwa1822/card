import React from 'react'
import Flex from './Flex'
import { css } from '@emotion/react'
import { Text } from './Text'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
  as?: 'div' | 'li'
}
export default function ListRow({
  left,
  contents,
  right,
  withArrow,
  onClick,
  as = 'li',
}: ListRowProps) {
  return (
    <Flex as={as} css={listRowContainerStyles} onClick={onClick} align="center">
      <Flex css={listRowLeftStlyes}>{left}</Flex>
      <Flex css={listRowContentsStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <FaArrowRight /> : null}
    </Flex>
  )
}

const listRowContainerStyles = css`
  padding: 8px 24px;
`
const listRowLeftStlyes = css`
  margin-right: 14px;
`
const listRowContentsStyles = css`
  flex: 1;
`

function ListRowTexts({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

function InconArrowRight() {
  return <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
}

ListRow.Texts = ListRowTexts
