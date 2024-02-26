import Flex from 'components/shared/Flex'
import { Spacing } from 'components/shared/SPacing'
import TextField from 'components/shared/TextLabel'
import React, { useState, useCallback } from 'react'
import { css } from '@emotion/react'
import Button from 'components/shared/Button'
import { Link } from 'react-router-dom'
import { Text } from 'components/shared/Text'
import { colors } from 'styles/colorPalatte'
import { FormInterface } from 'components/signup/Form'

export default function SigninForm({
  onSubmit,
}: {
  onSubmit: (formValue: FormInterface) => void
}) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    error: {
      email: '',
      password: '',
    },
  })

  const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') {
      var re =
        /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

      setFormValues((prev) => {
        return {
          ...prev,
          [name]: value,
          error: {
            ...prev.error,
            email: !re.test(value) ? '이메일 형식에 맞지않습니다' : '',
          },
        }
      })
    }
    if (name === 'password') {
      setFormValues((prev) => {
        return {
          ...prev,
          [name]: value,
          error: {
            ...prev.error,
            password: value.length < 8 ? '8자리 미만입니다' : '',
          },
        }
      })
    }
  }
  const 제출가능한가 =
    Object.values(formValues.error).filter((item) => item === '').length ===
    Object.values(formValues.error).length

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        onChange={handleFormValues}
        label="이메일"
        name="email"
        placeholder="olaf@gmail.com"
        value={formValues.email}
        hasError={formValues.error.email.length > 1}
        helpMessage={formValues.error.email}
      />
      <Spacing size={16} />
      <TextField
        onChange={handleFormValues}
        label="패스워드"
        type="password"
        name="password"
        value={formValues.password}
        hasError={formValues.error.password.length > 1}
        helpMessage={formValues.error.password}
      />
      <Spacing size={16} />
      <Button
        size="medium"
        disabled={제출가능한가 === false}
        onClick={() => {
          onSubmit(formValues)
        }}
      >
        로그인
      </Button>

      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`

const linkStyles = css`
  text-align: center;
  margin-top: 12px;

  & > span:hover {
    color: ${colors.blue};
  }
`
