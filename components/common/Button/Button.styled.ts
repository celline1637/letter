import styled, { css } from 'styled-components';

export type ButtonProps = {
  /** 버튼 색상 */
  color?: string;
  /** 전체 너비 활성화 여부 */
  fullWidth?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 아웃라인 여부 */
  outline?: boolean;
  /** 배경색 적용 여부 */
  isTransparent?: boolean;
};

const colorStyles = css<ButtonProps>`
  ${({ color, outline, isTransparent }) => {
    if (outline)
      return css`
        border: 1px solid ${({ theme }) => theme.colors[color ?? 'gray30']};
        background: ${isTransparent ? 'transparent' : 'white'};
        color: ${({ theme }) => color ?? theme.colors.gray90};
        &:not(:disabled):hover {
          background: ${({ theme }) => color ?? theme.colors.gray10};
          color: white;
          /* filter: brightness(${color ? '200%' : '100%'}); */
        }
        &:not(:disabled):active {
          background: ${({ theme }) => color ?? theme.colors.gray10};
          /* filter: brightness(${color ? '200%' : '100%'}); */
        }
        &:disabled {
          color: ${({ theme }) => color ?? theme.colors.gray40};
          border: 1px solid ${({ theme }) => color ?? theme.colors.gray30};
          opacity: 0.5;
        }
      `;

    return css`
      border: none;
      background: ${({ theme }) => color ?? theme.colors.purple50};
      color: white;
      &:not(:disabled):hover {
        background: ${({ theme }) => color ?? theme.colors.purple60};
        filter: brightness(${color ? '90%' : '100%'});
      }
      &:not(:disabled):active {
        background: ${({ theme }) => color ?? theme.colors.purple60};
        filter: brightness(${color ? '80%' : '100%'});
      }
      &:disabled {
        background-color: ${({ theme }) => theme.colors.gray40};
      }
    `;
  }}
`;

const fullWidthStyle = css<ButtonProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => theme.flexRowSet()};
  gap: 0.4rem;
  width: max-content;
  padding: 1rem;
  border-radius: 30px;
  ${({ theme }) => theme.textSet('subTitle')};
  font-weight: 600;
  outline: none;
  word-break: break-all;
  -webkit-tap-highlight-color: transparent;
  &:disabled {
    cursor: not-allowed !important;
  }
  ${fullWidthStyle}
  ${colorStyles}

  & > span {
    & + p {
      ${({ theme }) => theme.marginSet('left', '2px')};
    }
  }
`;
