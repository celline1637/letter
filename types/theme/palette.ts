import { palette } from 'theme/constants';

export type TColors = keyof typeof palette.light;

export type Colors = {
  [key in TColors]: string;
};
