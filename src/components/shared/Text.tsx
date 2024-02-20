import { Colors, colors } from 'styles/colorPalatte'
import { Typography, typographyMap } from 'styles/typography'
import { CSSProperties } from 'react'

import styled from '@emotion/styled'

interface TextProps {
  typography: Typography
  color: Colors
  display: CSSProperties['display']
  textAlign: CSSProperties['textAlign']
  fontWeight: CSSProperties['fontWeight']
  bold?: boolean
}

export const Text = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color], //
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
    display,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)
