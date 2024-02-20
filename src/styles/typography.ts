// t1,t2,t3
import { css } from '@emotion/react'

export const typographyMap = {
  t1: css`
    font-size: 30px;
    line-height: 1.35;
  `,
  t2: css`
    line-height: 1.34;
    font-size: 26px;
  `,
  t3: css`
    font-size: 24px;
    line-height: 1.32;
  `,
  t4: css`
    font-size: 17px;
    line-height: 1.3;
  `,
  t5: css`
    font-size: 15px;
    line-height: 1.2;
  `,
  t6: css`
    font-size: 14px;
    line-height: 1.21;
  `,
  t7: css`
    font-size: 13px;
    line-height: 1.5;
  `,
}

export type Typography = keyof typeof typographyMap
