import Header from "./component/header/header";
import { Auth0Provider } from "@auth0/auth0-react";
import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <Auth0Provider
      domain={"https://dev-409hmbcn.us.auth0.com"}
      clientId={"FaqWpnOrmusphqBBqLMLlXA83WSjcTSn"}
      redirectUri={window.location.origin}
    >
      <Header />
      <Homepage />
    </Auth0Provider>
  );
}

export default App;
