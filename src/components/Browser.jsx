// NPM Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files

import Navigation from "./Navigation";
import Login from "pages/Login";
import Home from "pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Movies from "pages/Movies";
import SignUp from "pages/SignUp";
import Footer from "./Footer";


export default function Browser() {
  
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp  />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
