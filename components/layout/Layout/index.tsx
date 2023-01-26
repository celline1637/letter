import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Background>
      <S.Container>
        <Navbar />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Container>
    </S.Background>
  );
};

export default Layout;
