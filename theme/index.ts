import { position, flex, textSet, lineClamp } from './mixins';
import { responsive as screen } from './base/responsive';
import { palette } from 'theme/constants';
import { colors } from './base';

export const theme = {
  ...position,
  ...flex,
  textSet,
  lineClamp,
  screen,
  colors,
};
