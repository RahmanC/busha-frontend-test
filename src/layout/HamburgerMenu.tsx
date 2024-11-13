import { ReactComponent as Open } from "../assets/svg/Hamburger.svg";
import { ReactComponent as Close } from "../assets/svg/CloseMenu.svg";
import { Hamburger } from "../styles/layout";

interface IHamburgerMenu {
  isVisible: boolean;
  onClick: () => void;
}

export const HamburgerMenu = ({ isVisible, onClick }: IHamburgerMenu) => {
  return (
    <Hamburger onClick={onClick}>{isVisible ? <Open /> : <Close />}</Hamburger>
  );
};
