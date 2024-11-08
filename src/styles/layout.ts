import styled from "styled-components";

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

export { LayoutWrapper, ContentWrapper, MainContent };
