import React, { ReactNode, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { hasUserInteractionState } from 'store/atom/bgm_player';
import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';
import BgmPlayer from 'components/common/BgmPlayer';
import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [hasInteraction, setHasInteraction] = useRecoilState(hasUserInteractionState);

  const handleUserInteraction = useCallback(() => {
    if (hasInteraction) return;

    setHasInteraction(true);

    console.log('👋 detect first user interaction');
  }, [hasInteraction, setHasInteraction]);

  return (
    <S.Background onClick={handleUserInteraction}>
      <S.Container>
        <Navbar />
        <S.Main>{children}</S.Main>
      </S.Container>
    </S.Background>
  );
};

export default Layout;
