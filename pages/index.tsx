/* eslint-disable @next/next/no-img-element */
import Button from 'components/common/Button';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './home.styles';

const HomePage = () => {
  const router = useRouter();

  const handleKaKaoLogin = () => {
    window.Kakao.Auth.login({
      success(authObj: any) {
        console.log(authObj);
        window.localStorage.setItem('token', authObj.access_token);
        router.push('/');
      },
      fail(err: any) {
        console.log(err);
      },
    });
  };
  return (
    <S.Wrapper>
      <img className="item1" src={'assets/image/home/bg_item1.png'} alt="1" />
      <img className="item2" src={'assets/image/home/bg_item2.png'} alt="1" />
      <img className="item3" src={'assets/image/home/bg_item3.png'} alt="1" />
      <img className="item4" src={'assets/image/home/bg_item4.png'} alt="1" />
      <img className="item5" src={'assets/image/home/bg_item5.png'} alt="1" />
      <img className="item6" src={'assets/image/home/bg_item6.png'} alt="1" />

      <S.Logo>
        <S.Title>카세트 SIDE B</S.Title>
        <img src={'assets/image/home/Cassette_3 1.png'} alt="카세트 SIDE B" />
      </S.Logo>
      <S.LoginBtn color="yellow" onClick={handleKaKaoLogin}>
        카카오 로그인
      </S.LoginBtn>
    </S.Wrapper>
  );
};

export default HomePage;
