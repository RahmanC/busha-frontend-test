import { MenuItem, SidebarWrapper } from "../styles/sidebar";

interface ISidebar {
  isVisible: boolean;
}
export const Sidebar = (props: ISidebar) => {
  return (
    <>
      {props.isVisible && (
        <SidebarWrapper>
          <MenuItem active>Wallets</MenuItem>
          <MenuItem>Prices</MenuItem>
          <MenuItem>Peer2Peer</MenuItem>
          <MenuItem>Activity</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SidebarWrapper>
      )}
    </>
  );
};
