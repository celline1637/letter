import Button from 'components/common/Button';
import Input from 'components/common/Input';
import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';

const NewAlbumScreen = () => {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.InputGroup>
        <Input
          label="앨범 제목"
          placeholder="나만의 앨범 제목을 적어주세요"
          handelInput={() => {}}
        />
      </S.InputGroup>
      <S.SubmitBtn color="black" fullWidth handleClick={() => router.replace('/album/1')}>
        앨범 만들기
      </S.SubmitBtn>
    </S.Wrapper>
  );
};

export default NewAlbumScreen;
