import { Link, useLocation } from 'react-router-dom'
import Flex from './Flex'
import Button from './Button'

import { css } from '@emotion/react'
import { colors } from 'styles/colorPalatte'
export function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  return (
    <Flex css={navbarContainerStyles} justify="space-between" align="center">
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signup">
          <Button>로그인/회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  z-index: 99;
  position: sticky;
  background-color: ${colors.white};
  top: 0;

  border-bottom: 1px solid ${colors.gray};
`
