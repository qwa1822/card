import { css } from '@emotion/react'

export const colorPalatte = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #fff;
    --black: #212121;
    --grey: #f0efef;
    --gray-100: #c0c4c7;
  }
`

export const colors = {
  red: `var(--red)`,
  blue: `var(--blue)`,
  green: `var(--green)`,
  white: `var(--white)`,
  black: `var(--black)`,
  gray: `var(--grey)`,
  gray100: `var(--gray-100)`,
}

export type Colors = keyof typeof colors
