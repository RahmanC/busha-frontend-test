import { AccountList } from "./screens/account-list";
import { Layout } from "./layout";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AccountList />
      </Layout>
    </>
  );
}

export default App;
