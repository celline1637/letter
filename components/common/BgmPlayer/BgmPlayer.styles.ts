import styled from 'styled-components';

export const BgmPlayer = styled.label`
  ${({ theme }) => theme.posCenterX('fixed')};
  top: 20px;
  color: black;

  & > audio {
    display: none;
  }

  @media screen and (max-width: 450px) {
    & > button {
      width: 45px;
      height: 45px;
      padding: 1rem;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Text = styled.span`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
