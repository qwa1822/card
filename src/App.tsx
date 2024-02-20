import { css } from '@emotion/react'

import styled from '@emotion/styled'
import Button from 'components/shared/Button'
import { Text } from 'components/shared/Text'

function App() {
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
        </div>
      </h2>
    </>
  )
}

export default App
