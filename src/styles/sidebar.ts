import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 240px;
  padding: 24px 0;
  height: calc(100vh - 64px);

  @media (max-width: 768px) {
    position: fixed;
    margin-top: 10%;
    background: white;
    z-index: 1000;
    width: 100%;
    height: auto;
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  }
`;

const MenuItem = styled.div<{ active?: boolean }>`
  padding: 14px 17px;
  color: ${(props) => (props.active ? "#000000" : "#3E4C59")};
  background-color: ${(props) => (props.active ? "#F5F7FA" : "transparent")};
  cursor: pointer;
  border-radius: 3px;
  font-weight: ${(props) => (props.active ? "500" : "400")};
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px 14px;
    font-size: 14px;
  }

  &:hover {
    background-color: #f5f7fa;
  }
`;

export { SidebarWrapper, MenuItem };
