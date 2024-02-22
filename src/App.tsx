import { css } from '@emotion/react'

import styled from '@emotion/styled'
import Alert from 'components/shared/Alert'
import Button from 'components/shared/Button'
import Input from 'components/shared/Input'
import { Text } from 'components/shared/Text'
import TextField from 'components/shared/TextLabel'
import { useAlertContext } from 'contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <>
      <h2>
        <Text typography="t1" display="block" color="red">
          T1
        </Text>
        <Text typography="t2" color="blue">
          t2
        </Text>
        <Text typography="t3">t3</Text>

        <Text>T1</Text>

        <div style={{ height: 10, width: '100%', background: '#efefef' }}>
          <Button color="success">클릭해주세요</Button>
          <Button color="error">클릭해주세요</Button>
          <Button color="success" weak={true}>
            클릭해주세요
          </Button>

          <Button color="success" weak={false}>
            클릭해주세요
          </Button>

          <Button color="error" weak={true}>
            클릭해주세요
          </Button>
          <Input placeholder="로그인" aria-invalid={false} />
          <Input aria-invalid={true} />
          <Input />

          <TextField label="아이디" />
          <TextField label="패스워드" />

          {/* <Alert
            open={true}
            title="알럿이 떳습니다"
            onButtonClick={() => {}}
          ></Alert> */}

          <Button
            onClick={() => {
              open({
                title: '카드신청완료',
                description: '내역 페이지에서 확인',
              })
            }}
          >
            Alert오픈
          </Button>
        </div>
      </h2>
    </>
  )
}

export default App
