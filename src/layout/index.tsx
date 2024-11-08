import { ContentWrapper, LayoutWrapper, MainContent } from "../styles/layout";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface ILayout {
  children: React.ReactNode;
}

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
