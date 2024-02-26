import { ChangeEvent, useState, useCallback } from 'react'

import FixedBottomButton from 'components/shared/FixedBottomButton'
import Flex from 'components/shared/Flex'
import TextField from 'components/shared/TextLabel'
import { css } from '@emotion/react'
import { Spacing } from 'components/shared/SPacing'
import { values } from 'lodash'

export interface FormInterface {
  password: string
  repassword?: string
  name?: string
  email: string
  error: {
    name?: string
    password: string
    repassword?: string
    email: string
  }
}
function Form({ onSubmit }: { onSubmit: (formValues: FormInterface) => void }) {
  const [formValues, setFormValues] = useState<FormInterface>({
    name: '',
    password: '',
    repassword: '',
    email: '',
    error: {
      name: '',
      password: '',
      repassword: '',
      email: '',
    },
  })

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
    if (name === 'repassword') {
      setFormValues((prev) => {
        return {
          ...prev,
          [name]: value,
          error: {
            ...prev.error,
            repassword:
              formValues.password && formValues.password === value
                ? ''
                : '비밀번호가 서로 일치하지않습니다!',
          },
        }
      })
    }
    if (name === 'name') {
      setFormValues((prev) => {
        return {
          ...prev,
          [name]: value,
          error: {
            ...prev.error,
            name: value.length < 2 ? '이름을 2글자 이상 입력해주세요' : '',
          },
        }
      })
    }
  }

  const 제출가능한상태인가 =
    Object.values(formValues.error).filter((item) => item === '').length ===
    Object.values(formValues.error).length

  return (
    <Flex direction="column" css={formContainerStlyes}>
      <TextField
        name="email"
        label="이메일"
        placeholder="olaf@gmail.com"
        value={formValues.email}
        onChange={onChangeHandler}
        hasError={formValues.error.email.length > 1}
        helpMessage={formValues.error.email}
      />
      <Spacing size={16} />
      <TextField
        name="password"
        label="패스워드"
        type="password"
        value={formValues.password}
        onChange={onChangeHandler}
        hasError={formValues.error.password.length > 1}
        helpMessage={formValues.error.password}
      />
      <Spacing size={16} />
      <TextField
        name="repassword"
        label="패스워드 재확인"
        type="password"
        value={formValues.repassword}
        onChange={onChangeHandler}
        hasError={formValues.error.repassword.length > 1}
        helpMessage={formValues.error.repassword}
      />

      <Spacing size={16} />
      <TextField
        name="name"
        label="이름"
        onChange={onChangeHandler}
        value={formValues.name}
        hasError={formValues.error.name.length > 1}
        helpMessage={formValues.error.name}
      />

      <FixedBottomButton
        label="회원가입"
        disabled={제출가능한상태인가 === false}
        onClick={() => {
          onSubmit(formValues)
        }}
      />
    </Flex>
  )
}

const formContainerStlyes = css`
  padding: 24px;
`
export default Form
