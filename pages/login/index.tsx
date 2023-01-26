import Button from '../../components/common/Button';
import React from 'react';
import { useRouter } from 'next/router';

const Login = () => {
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
    <div>
      <Button outline color="black" fullWidth handleClick={handleKaKaoLogin}>
        카카오로 3초만에 로그인하기
      </Button>
    </div>
  );
};

export default Login;
