import { palette } from 'theme/constants';

export type TColors = keyof typeof palette.light;

export interface Colors {
  [key in TColors]: string;
}
