import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'

import Button from './Button'
import { colors } from 'styles/colorPalatte'

function FixedBottomButton({
  label,
  disabled,
  onClick,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
}) {
  const $portal = document.getElementById('root-portal')

  if ($portal === null) {
    return null
  }
  return createPortal(
    <Container>
      <Button
        size="medium"
        disabled={disabled}
        css={buttonStyles}
        full={true}
        onClick={onClick}
      >
        {label}
      </Button>
    </Container>,
    $portal,
  )
}
const SlideUp = keyframes`
  
  to{
    transform: translateY(0);
  }
`
const Container = styled.div`
  position: fixed;

  left: 0;
  right: 0;
  bottom: 0;

  padding: 20px 10px 8px;
  background-color: ${colors.white};
  transform: translateY(100%);

  animation: ${SlideUp} 0.5s ease-in-out forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
