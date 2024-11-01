import { Outlet, Navigate } from "react-router-dom";
import { Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import { useSelector } from "../../store";
import { authState } from "../../store/slices/authSlice";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector(authState());
  if (!isLoggedIn) {
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
