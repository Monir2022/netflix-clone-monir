// NPM Packages
import { Route } from "react-router-dom";

// Project files
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import RecoverPassword from "pages/RecoverPassword";

export default function Unlogged() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path = "/recover-password" component={RecoverPassword} />
    </>
  );
}