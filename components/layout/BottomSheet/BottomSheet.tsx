import React, { ReactNode, useEffect } from 'react';

import * as S from './BottomSheet.styled';

interface propTypes {
  /** bottomSheet 컨텐츠 */
  children: ReactNode;
  /** bottomSheet 컨텐츠 */
  title?: string;
  /** bottomSheet 컨텐츠 */
  isOpen: boolean;
  /** bottomSheet 컨텐츠 */
  toggleModal: React.MouseEventHandler;
  /** Dimmer의 불투명 여부 */
  isBlur?: boolean;
  /** Dimmer 클릭 시 콜백 함수(모달 닫힘과 같은) 전달 가능 여부 */
  isDimmerClickable?: boolean;
}

const BottomSheet = ({
  children,
  title,
  isOpen,
  isBlur,
  toggleModal,
  isDimmerClickable,
}: propTypes) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <S.Container>
      <S.Dimmer
        {...(isDimmerClickable && { onClick: toggleModal })}
        isOpen={isOpen}
        isBlur={isBlur}
      >
        <S.Modal>
          <S.Header>
            {title && <h3> {title}</h3>}
            {/* <Button outline handleClick={toggleModal} label="❌" /> */}
          </S.Header>
          <S.Contents>{children}</S.Contents>
        </S.Modal>
      </S.Dimmer>
    </S.Container>
  );
};

export default BottomSheet;
