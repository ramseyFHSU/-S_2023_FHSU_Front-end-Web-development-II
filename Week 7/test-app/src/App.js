// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import TaskRoutes from "./routes/TaskRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/task/*" element={<TaskRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
