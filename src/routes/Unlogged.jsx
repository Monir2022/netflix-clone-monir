// NPM Packages
import { Routes, Route } from "react-router-dom";

// Project files
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import NotLogged from "pages/NotLogged";

export default function Unlogged() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotLogged />} />
    </Routes>
  );
}
