import BgmPlayer from 'components/common/BgmPlayer';
import DecoratedText from 'components/common/DecoratedText';
import Link from 'next/link';
import React from 'react';
import * as S from './Navbar.styles';

const Navbar = () => {
  return (
    <S.Navbar>
      <BgmPlayer />
      <Avatar />
    </S.Navbar>
  );
};

const Avatar = () => {
  return (
    <S.Avatar>
      <S.Profile>
        <img src={'assets/image/profile.png'} alt="profile" />
      </S.Profile>
      <DecoratedText value="내 계정" />
    </S.Avatar>
  );
};

export default Navbar;
