import { css } from '@emotion/react'

import styled from '@emotion/styled'
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
      </h2>
    </>
  )
}

export default App
