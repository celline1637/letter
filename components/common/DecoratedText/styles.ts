import styled from 'styled-components';

export const Text = styled.span`
  &.blue {
    position: relative;

    &:before {
      content: '';
      z-index: -1;
      left: 0em;
      top: 0em;
      border-width: 2px;
      border-style: solid;
      border-color: darkblue;
      position: absolute;
      border-right-color: transparent;
      width: 100%;
      height: 1em;
      transform: rotate(2deg);
      opacity: 0.5;
      border-radius: 0.25em;
    }

    &:after {
      content: '';
      z-index: -1;
      left: 0em;
      top: 0em;
      border-width: 2px;
      border-style: solid;
      border-color: darkblue;
      border-left-color: transparent;
      border-top-color: transparent;
      position: absolute;
      width: 100%;
      height: 1em;
      transform: rotate(-1deg);
      opacity: 0.5;
      border-radius: 0.25em;
    }
  }

  &.red {
    position: relative;

    &:before {
      content: '';
      z-index: -1;
      left: -0.5em;
      top: -0.1em;
      border-width: 2px;
      border-style: solid;
      border-color: red;
      position: absolute;
      border-right-color: transparent;
      width: 100%;
      height: 1em;
      transform: rotate(2deg);
      opacity: 0.7;
      border-radius: 50%;
      padding: 0.1em 0.25em;
    }

    &:after {
      content: '';
      z-index: -1;
      left: -0.5em;
      top: 0.1em;
      padding: 0.1em 0.25em;
      border-width: 2px;
      border-style: solid;
      border-color: red;
      border-left-color: transparent;
      border-top-color: transparent;
      position: absolute;
      width: 100%;
      height: 1em;
      transform: rotate(-1deg);
      opacity: 0.7;
      border-radius: 50%;
    }
  }

  &.highlight {
    position: relative;

    &:before {
      content: '';
      background-color: #ff6db7;
      width: 100%;
      height: 1em;
      position: absolute;
      z-index: -1;
      filter: url('assets/svg/textHighlight');
      left: -0.25em;
      /* top: 0.1em; */
      padding: 0 0.25em;
    }
  }
`;
