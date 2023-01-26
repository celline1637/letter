import React, { ChangeEventHandler, useCallback } from 'react';

import * as S from './Input.styles';
import { useInput } from './useInput';

interface InputProps {
  label?: string;
  InputSize?: 'title' | 'body1';
  placeholder?: string;
  readOnly?: boolean;
  /** 인풋의 초기값입니다. */
  initialValue?: string;
  /** 입력 값에 대한 유효성 검사에 대한 결과로 error text를 반환합니다. */
  validator?: (value: string) => string | undefined;
  handelInput: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = ({
  label = 'label',
  InputSize = 'title',
  placeholder,
  readOnly = false,
  validator,
}: InputProps) => {
  const { value, helperText, onChange } = useInput({ validator });
  return (
    <S.Input>
      <S.Label>{label}</S.Label>
      <S.TextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        InputSize={InputSize}
      />
      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Input>
  );
};

export default Input;
