import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MultiProcessPage from "./pages/MultiProcessPage";
import SingleProcessPage from "./pages/SingleProcessPage";
import LoginPage from "./pages/Login"; // import login page

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/multi" replace />} />
        <Route path="/login" element={<LoginPage />} /> {/* add login route */}
        <Route path="/multi" element={<MultiProcessPage />} />
        <Route path="/single" element={<SingleProcessPage />} />
        <Route path="*" element={<div className="card">Not Found</div>} />
      </Routes>
    </div>
  );
}
