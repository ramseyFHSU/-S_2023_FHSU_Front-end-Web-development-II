// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import TaskRoutes from "./routes/TaskRoutes";
import { TaskProvider } from "./components/context/TaskContext";
import SignInForm from "./pages/SignInForm";

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignInForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/task/*" element={<TaskRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TaskProvider>
  );
}
