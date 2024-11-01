import { Container, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { useSelector } from "../../store";
import { authState } from "../../store/slices/authSlice";

function MainLayout() {
  const { isLoggedIn } = useSelector(authState());
  if (isLoggedIn) {
    return <Navigate to="/app" replace />;
  }
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{ width: "100%" }} alignItems="center">
          <img src={Logo} alt="Logo" style={{ height: 120, width: 120 }} />
        </Stack>
      </Stack>
      <Outlet />
    </Container>
  );
}

export default MainLayout;
