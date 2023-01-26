import { TFlexColumnSet, TFlexRowSet } from 'types/theme';

const flexRowSet: TFlexRowSet = (justify = 'center', align = 'center') => {
  return `
    display: flex;
    flex-direction: row;
    justify-content: ${justify};
    align-items: ${align};
  `;
};

const flexColumnSet: TFlexColumnSet = (justify = 'center', align = 'center') => {
  return `
    display: flex;
    flex-direction: column;
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export const flex = {
  flexRowSet,
  flexColumnSet,
};
