// NPM Packages
import { Route } from "react-router-dom";
// Project files
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import EditPage from "pages/EditPage";

export default function Logged() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route component={EditPage} path="/edit/:id" />
    </div>
  );
}
