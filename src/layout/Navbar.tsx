import {
  NavbarWrapper,
  StyledLogo,
  UserAvatar,
  UserInfo,
} from "../styles/navbar";

interface INavbar {
  userName?: string;
}

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
