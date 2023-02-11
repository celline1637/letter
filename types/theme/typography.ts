import { FlattenSimpleInterpolation } from 'styled-components';
import { fontFamily, typography } from 'theme/constants/typography';

export type FontFamily = keyof typeof fontFamily;
export type Typography = keyof typeof typography;
export type TextSetPropTypes = {
  /** 텍스트 스타일 이름 */
  variant: Typography;
  /** 굵기 : true = 700, false = 400 */
  isBold?: boolean;
  /** 폰트스타일 */
  fontFamily?: FontFamily;
};
export type TextSet = (
  variant: number,
  fontFamily?: FontFamily,
  isBold?: boolean
) => FlattenSimpleInterpolation;
