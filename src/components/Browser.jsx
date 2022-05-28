// NPM Packages
import { BrowserRouter } from "react-router-dom";
import {Switch} from "react-router-dom"

// Project files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Footer from "components/Footer";
import Navigation from "components/Navigation";

export default function Browser({ isLogged }) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>{isLogged ? <Logged /> : <Unlogged />}</Switch>
      <Footer />
    </BrowserRouter>
  );
}
