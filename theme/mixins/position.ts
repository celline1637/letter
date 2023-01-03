import { BoxSizeSet, Direction, PosCenter } from '@types/theme/position';

const posCenterX: PosCenter = (position = 'absolute') => {
  return `
    position: ${position};
    left: 50%;
    transform: translateX(-50%);
  `;
};

const posCenterY: PosCenter = (position = 'absolute') => {
  return `
    position: ${position};
    top: 50%;
    transform: translateY(-50%);
  `;
};

const posCenter: PosCenter = (position = 'absolute') => {
  return `
    position: ${position};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};

const marginSet: BoxSizeSet = (direction: Direction, val: string) => {
  switch (direction) {
    case 'top':
      return `
        margin-block-start: ${val};
      `;
    case 'bottom':
      return `
        margin-block-end: ${val};
      `;
    case 'left':
      return `
        margin-inline-start: ${val};
      `;
    case 'right':
      return `
        margin-inline-end: ${val};
      `;
    default:
      return '';
  }
};

const paddingSet: BoxSizeSet = (direction: Direction, val: string) => {
  switch (direction) {
    case 'top':
      return `
        padding-block-start: ${val};
      `;
    case 'bottom':
      return `
        padding-block-end: ${val};
      `;
    case 'left':
      return `
        padding-inline-start: ${val};
      `;
    case 'right':
      return `
        padding-inline-end: ${val};
      `;
    default:
      return '';
  }
};

export const position = {
  posCenterX,
  posCenterY,
  posCenter,
  paddingSet,
  marginSet,
};
