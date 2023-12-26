import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Users from "./components/Users";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </>
  );
}
