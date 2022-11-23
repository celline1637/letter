import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

export const remove = keyframes`
from {
  display: inherit;
}
to {
  display: none;
}
`;

export const fadeInDown = keyframes`
    0% {
      transform: translate(-50%, -1000%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
`;

export const fadeOutUp = keyframes`
  0% {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -1000%);
      opacity: 0;
    }
`;
