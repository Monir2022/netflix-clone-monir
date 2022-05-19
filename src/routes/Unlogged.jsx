// NPM Packages
import { Route } from "react-router-dom";

// Project files
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import RecoverPassword from "pages/RecoverPassword";

export default function Unlogged() {
  return (
    <>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path = "/recover-password" component={RecoverPassword} />
    </>
  );
}