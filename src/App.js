import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, PageNotFound, Register } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Account from "./pages/user/Account";
import AddTodo from "./pages/user/AddTodo";
import Dashboard from "./pages/admin/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
