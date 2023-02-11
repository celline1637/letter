import styled from 'styled-components';
import Button from 'components/common/Button';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0 1rem;
  padding-bottom: 16px;
  ${({ theme }) => theme.flexColumnSet()};
  position: relative;
  background: url('assets/image/home/bg_tile.png');
  overflow: hidden;
  & > .item1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > .item2 {
    position: absolute;
    top: 0;
    right: 0;
  }

  & > .item3 {
    position: absolute;
    top: 268px;
    left: -64px;
  }

  & > .item4 {
    position: absolute;
    top: 387.44px;
    right: 0;
  }

  & > .item5 {
    position: absolute;
    left: -8px;
    bottom: 16px;
  }

  & > .item6 {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin-top: 20vh;
  ${({ theme }) => theme.paddingSet('right', '28px')};
  ${({ theme }) => theme.flexColumnSet('flex-start')};
  flex-grow: 1;
`;

export const Title = styled.h1`
  width: 100%;
  ${({ theme }) => theme.textSet(40)};
  text-align: center;
`;

export const LoginBtn = styled(Button)`
  z-index: 1;
`;
