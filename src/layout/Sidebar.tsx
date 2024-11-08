import { MenuItem, SidebarWrapper } from "../styles/sidebar";

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
