// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Chart from "../pages/Chart";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoutes";
import PrivateLayout from "../layouts/PrivateLayout";
import UserDetail from "../pages/UserDetail";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute><PrivateLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
