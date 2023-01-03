import 'styled-components';

import * as T from '@/types/theme';

import { DefaultTheme } from './styled';

declare module 'styled-components' {
  export interface DefaultTheme {
    screen: T.TScreen;
    colors: T.Colors;
    textSet: T.TextSet;
    flexRowSet: T.TFlexRowSet;
    flexColumnSet: T.TFlexColumnSet;
    posCenterY: T.PosCenterX;
    posCenter: T.PosCenter;
    posCenterX: T.PosCenter;
    paddingSet: T.BoxSizeSet;
    marginSet: T.BoxSizeSet;
    lineClamp: (limit: number) => string;
  }
}
