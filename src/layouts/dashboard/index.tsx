import { Outlet, Navigate } from "react-router-dom";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";

const isAuthenticated = true;

const DashboardLayout = () => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Stack direction="row">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
