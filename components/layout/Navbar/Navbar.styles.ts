import styled from 'styled-components';

export const Navbar = styled.nav`
  ${({ theme }) => theme.flexRowSet('space-between')};
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
  z-index: 2;
  padding: 20px 24px 0;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Avatar = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  gap: 8px;
  margin-left: auto;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.black};
  &:hover {
    cursor: pointer;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
