import { Link, useLocation } from 'react-router-dom'
import Flex from './Flex'
import Button from './Button'

import { css } from '@emotion/react'
import { colors } from 'styles/colorPalatte'
import { userAtom } from 'atoms/user'
import { useCallback } from 'react'

import { useRecoilValue } from 'recoil'
import useUser from 'hooks/auth/useUser'
import { signOut } from 'firebase/auth'
import { auth } from 'firebase'
export function Navbar() {
  const location = useLocation()

  const user = useUser()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const handleLogout = useCallback(() => {
    console.log('hello')

    signOut(auth)
      .then(() => {
        console.log('로그아웃완료')
      })
      .catch((error) => {
        console.error('로그아웃 오류!', error)
      })
  }, [user, showSignButton])

  const renderButton = useCallback(() => {
    if (user != null) {
      return <Button onClick={handleLogout}>로그아웃</Button>
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex css={navbarContainerStyles} justify="space-between" align="center">
      <Link to="/">홈</Link>
      {renderButton()}
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
