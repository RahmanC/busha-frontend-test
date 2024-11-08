import { Layout } from "./layout";
import { AccountList } from "./screens/account-list";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div id="modal-root">
      <GlobalStyle />
      <Layout>
        <AccountList />
      </Layout>
    </div>
  );
}

export default App;
