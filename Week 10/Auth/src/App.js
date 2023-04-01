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
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <TaskProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<SignInForm />} />
              {/* <Route path="/signIn" element={< />} /> */}
              {/* <Route path="/about" element={<AboutPage />} />
              <Route path="/task/*" element={<TaskRoutes />} /> */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TaskProvider>
      </AuthContextProvider>
    </>
  );
}
