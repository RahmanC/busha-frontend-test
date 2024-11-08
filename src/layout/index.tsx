import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface ILayout {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 60px 160px;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px;
`;

export const Layout = ({ children }: ILayout) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <ContentWrapper>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
