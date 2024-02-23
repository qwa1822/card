import { Text } from './Text'
import Flex from './Flex'

import { css } from '@emotion/react'

interface TopProps {
  title: string
  subTitle: string
}

function Top({ title, subTitle }: TopProps) {
  return (
    <Flex direction="column" css={ContainerStyles}>
      <Text bold={true} typography="t4">
        {title}
      </Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const ContainerStyles = css`
  padding: 24px;
`

export default Top
