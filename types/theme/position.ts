export type Position = 'fixed' | 'absolute' | 'static' | 'relative' | 'sticky';
export type Direction = 'top' | 'bottom' | 'left' | 'right';
export type PosCenter = (position?: Position) => string;
export type BoxSizeSet = (direction: Direction, val: string) => string;
