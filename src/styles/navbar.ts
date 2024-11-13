import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const NavbarWrapper = styled.div`
  background-color: #ffffff;
  color: #3e4c59;
  padding: 14px 160px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 12px 16px;
  }
`;

const StyledLogo = styled(Logo)`
  width: 120px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #3e4c59;
  font-size: 14px;
  font-weight: medium;

  @media (max-width: 768px) {
    font-size: 12px;
  }
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

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;

const WithMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export { NavbarWrapper, StyledLogo, UserInfo, UserAvatar, WithMenuWrapper };
