import React, { ReactNode } from 'react';

import * as S from './Button.styled';

interface ButtonProps extends S.ButtonProps {
  /** 버튼 텍스트 */
  children: ReactNode;
  /** 클릭 시 호출되는 콜백 */
  handleClick?: React.MouseEventHandler;
}

const Button = ({ children, handleClick, ...rest }: ButtonProps) => {
  return (
    <S.Button onClick={handleClick} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
