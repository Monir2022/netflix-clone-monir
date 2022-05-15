// NPM Packages
import { Routes, Route } from "react-router-dom";

// Project files
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import NotLogged from "pages/NotLogged";

export default function Logged() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<SignUp/>} />
      <Route path="*" element={<NotLogged />} />
    </Routes>
    
  );
}