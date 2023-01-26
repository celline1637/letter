import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexRowSet()};
  position: relative;
`;

export const Dimmer = styled.div<{ isOpen: boolean; isBlur?: boolean }>`
  ${({ theme }) => theme.flexRowSet()};
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: ${({ isBlur }) => isBlur && 'blur(5px);'};
  z-index: 9999;

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 480px;
  }
`;

export const Modal = styled.div`
  width: 100%;
  /* height: 80vh; */
  padding: 25px 0 0 0;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  border-radius: 30px 30px 0 0;
  animation: up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes up {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  ${({ theme }) => theme.flexRowSet()};
  & > h3 {
    ${({ theme }) => theme.posCenterX()};
    font-size: 1.2rem;
  }
  & > button {
    margin-left: auto;
    border: none;
  }
`;

export const Contents = styled.div`
  padding: 1rem;
  padding-bottom: 1.4rem;
`;
