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
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <TaskProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<SignInForm />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <AboutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/task/*"
                element={
                  <ProtectedRoute>
                    <TaskRoutes />
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
