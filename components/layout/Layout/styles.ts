import styled from 'styled-components';

export const Background = styled.div`
  ${({ theme }) => theme.flexRowSet()};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px;
  padding: 0 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Main = styled.main`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
`;
