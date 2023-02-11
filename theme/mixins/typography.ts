import { css } from 'styled-components';
import { fontFamily, typography } from 'theme/constants/typography';

import { FontFamily, Typography } from 'types/theme/typography';

const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

export const textSet = (fontSize: number, _fontFamily: FontFamily, isBold = false) => {
  return css`
    font-family: ${fontFamily[_fontFamily]};
    font-size: ${pxToRem(fontSize)};
    line-height: 150%;
    font-weight: ${isBold ? '600' : 'normal'};
    color: ${({ theme }) => theme.colors.gray90};
  `;
};
