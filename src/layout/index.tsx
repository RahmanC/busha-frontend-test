import { useEffect, useState } from "react";
import { ContentWrapper, LayoutWrapper, MainContent } from "../styles/layout";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  // Resets the sidebar visibility on large screens
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 769) {
          setIsSidebarVisible(true);
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <LayoutWrapper>
      <Navbar
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      <ContentWrapper>
        <Sidebar isVisible={isSidebarVisible} />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
