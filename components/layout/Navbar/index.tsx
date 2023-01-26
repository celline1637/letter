import Link from 'next/link';
import React from 'react';
import * as S from './Navbar.styles';

const Navbar = () => {
  return (
    <S.Navbar>
      <Link href="/">Home</Link>
      <Link href="/post">PostList</Link>
    </S.Navbar>
  );
};

export default Navbar;
