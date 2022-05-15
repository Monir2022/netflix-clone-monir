// NPM Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Navigation from "./Navigation";
import Login from "pages/Login";
import Home from "pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Movies from "pages/Movies";
import SignUp from "pages/SignUp";

export default function Browser({ isLogged }) {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path= "signup" element= {<SignUp/>}/>
        <Route element = {<ProtectedRoutes/>}>
          <Route path= "/" element= {<Home/>}/>
          <Route path ="movies" element = {<Movies/>}/>
        </Route>                 
      </Routes>
    </BrowserRouter>
  );
}