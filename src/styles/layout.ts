import styled from "styled-components";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 60px 160px;

  @media (max-width: 768px) {
    margin: 16px;
    flex-direction: column;
    margin: 10px auto;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    margin-top: 40px;
  }
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-weight: medium;
  font-size: 16px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export { LayoutWrapper, ContentWrapper, MainContent, Hamburger };
