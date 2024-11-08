import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

interface INavbar {
  userName?: string;
}

const NavbarWrapper = styled.div`
  background-color: #ffffff;
  color: #3e4c59;
  padding: 14px 160px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  width: 120px;
  height: auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #3e4c59;
  font-size: 14px;
  font-weight: medium;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  background-color: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const Navbar = ({ userName = "Oluwatobi Akindunjoye" }: INavbar) => {
  return (
    <NavbarWrapper>
      <StyledLogo />
      <UserInfo>
        <UserAvatar>{userName.charAt(0)}</UserAvatar>
        <span>{userName}</span>
      </UserInfo>
    </NavbarWrapper>
  );
};
