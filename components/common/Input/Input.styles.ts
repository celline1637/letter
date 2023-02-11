import styled from 'styled-components';

export const Input = styled.label`
  width: 100%;
`;

export const Label = styled.p`
  ${({ theme }) => theme.textSet(12)};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray60};
`;

export const TextArea = styled.input<{ InputSize: 'title' | 'body1' }>`
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray30};
  ${({ theme, InputSize }) => theme.textSet(InputSize === 'title' ? 20 : 14)};
  font-weight: 700;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const HelperText = styled.p`
  ${({ theme }) => theme.textSet(12)};
  color: ${({ theme }) => theme.colors.sub.red50};
`;
