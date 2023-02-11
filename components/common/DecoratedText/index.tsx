import React from 'react';
import * as S from './styles';

const DecoratedText = ({
  value,
  type = 'highlight',
}: {
  value: string;
  type?: 'blue' | 'red' | 'highlight';
}) => {
  return <S.Text className={type}>{value}</S.Text>;
};

export default DecoratedText;
