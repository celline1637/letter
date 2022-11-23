import { css } from 'styled-components';
import { fontFamily, typography } from 'theme/constants/typography';

import { FontFamily, Typography } from '@/types/theme/typography';

const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

export const textSet = (
  _typography: Typography,
  _fontFamily: FontFamily = 'noto',
  isBold = false
) => {
  return css`
    font-family: ${fontFamily[_fontFamily]};
    font-size: ${pxToRem(typography[_typography].size)};
    line-height: ${typography[_typography].height};
    font-weight: ${isBold ? '600' : 'normal'};
  `;
};
