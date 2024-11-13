import {
  NavbarWrapper,
  StyledLogo,
  UserAvatar,
  UserInfo,
  WithMenuWrapper,
} from "../styles/navbar";
import { HamburgerMenu } from "./HamburgerMenu";

interface INavbar {
  userName?: string;
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

export const Navbar = ({
  userName = "Oluwatobi Akindunjoye",
  isSidebarVisible,
  toggleSidebar,
}: INavbar) => {
  return (
    <NavbarWrapper>
      <StyledLogo />
      <WithMenuWrapper>
        <UserInfo>
          <UserAvatar>{userName.charAt(0)}</UserAvatar>
          <span>{userName}</span>
        </UserInfo>
        <HamburgerMenu isVisible={!isSidebarVisible} onClick={toggleSidebar} />
      </WithMenuWrapper>
    </NavbarWrapper>
  );
};
