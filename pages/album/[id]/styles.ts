import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TrackList = styled.ol``;

export const Track = styled.li`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray10};
  & + & {
    margin-top: 0.6rem;
  }
`;

export const ModalTitle = styled.div``;

export const RecordMenuBtnGroup = styled.div`
  ${({ theme }) => theme.flexRowSet('space-around')};
  padding: 1.4rem 1rem 1rem;
  & span {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
`;
