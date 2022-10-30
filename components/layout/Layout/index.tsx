import React, { ReactNode } from 'react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
