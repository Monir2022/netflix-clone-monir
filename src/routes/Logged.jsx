// NPM Packages
import { Route } from "react-router-dom";
// Project files
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import EditPage from "pages/EditPage";
import { SearchProvider } from "state/SearchProvider";

export default function Logged() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route component={EditPage} path="/edit/:id" />

    </div>
    
      
    
  );
}
