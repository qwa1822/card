import styled from '@emotion/styled'
import { getAddBanners } from 'components/remote/adBanner'
import Flex from 'components/shared/Flex'
import { Text } from 'components/shared/Text'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { colors } from 'styles/colorPalatte'
import { getCards } from 'components/remote/card'
function AdBanners() {
  const { data } = useQuery(['adBanners'], () => getAddBanners())

  console.log(data)

  return (
    <Container>
      {data?.map((banner) => {
        return (
          <Link to="/">
            <Flex direction="column" css={bannerContainerStlyes}>
              <Text bold={true}>{banner.title}</Text>
              <Text typography="t7">{banner.description}</Text>
            </Flex>
          </Link>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`

const bannerContainerStlyes = css`
  padding: 16px;
  background-color: ${colors.gray};
  border-radius: 4px;
`

export default AdBanners
