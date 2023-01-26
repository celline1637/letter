import styled from 'styled-components';
import Button from 'components/common/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
`;

export const InputGroup = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export const SubmitBtn = styled(Button)`
  margin: 1rem 0;
`;
