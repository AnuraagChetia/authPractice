import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/auth">
          {/* {!authCtx.isLoggedIn && <AuthPage />}
          {authCtx.isLoggedIn && <HomePage></HomePage>} */}
          <AuthPage />
        </Route>
        <Route path="/profile">
          {!authCtx.isLoggedIn && <AuthPage></AuthPage>}
          {authCtx.isLoggedIn && <UserProfile></UserProfile>}
          {/* <UserProfile /> */}
        </Route>
        <Route path="*">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
