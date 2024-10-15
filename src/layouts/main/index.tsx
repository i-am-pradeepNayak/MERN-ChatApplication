import { Container, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";

const isAuthenticated = true;
function MainLayout() {
  if (isAuthenticated) {
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
