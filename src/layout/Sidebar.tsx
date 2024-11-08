import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 240px;
  padding: 24px 0;
  height: calc(100vh - 64px);
`;

const MenuItem = styled.div<{ active?: boolean }>`
  padding: 14px 17px;
  color: ${(props) => (props.active ? "#000000" : "#3E4C59")};
  background-color: ${(props) => (props.active ? "#F5F7FA" : "transparent")};
  cursor: pointer;
  border-radius: 3px;
  font-weight: ${(props) => (props.active ? "500" : "400")};
  font-size: 16px;

  &:hover {
    background-color: #f5f7fa;
  }
`;

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <MenuItem active>Wallets</MenuItem>
      <MenuItem>Prices</MenuItem>
      <MenuItem>Peer2Peer</MenuItem>
      <MenuItem>Activity</MenuItem>
      <MenuItem>Settings</MenuItem>
    </SidebarWrapper>
  );
};
