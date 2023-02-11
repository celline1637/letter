import { atom, selector } from 'recoil';

export const hasUserInteractionState = atom<boolean>({
  key: 'hasUserInteraction',
  default: false,
});
