import { css } from '@emotion/react'

export const colorPalatte = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #fff;
    --black: #212121;
    --grey: #9e9e9e;
  }
`

export const colors = {
  red: `var(--red)`,
  blue: `var(--blue)`,
  green: `var(--green)`,
  white: `var(--white)`,
  black: `var(--black)`,
  gray: `var(--grey)`,
}

export type Colors = keyof typeof colors
