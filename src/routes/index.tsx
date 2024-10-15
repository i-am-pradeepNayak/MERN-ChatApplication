import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

/* eslint-disable react/jsx-props-no-spreading */
const Loadable = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
/* eslint-enable react/jsx-props-no-spreading */

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const Settings = Loadable(lazy(() => import("../pages/settings/setting")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const GroupChat = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Call = Loadable(lazy(() => import("../pages/dashboard/Call")));
const Profile = Loadable(lazy(() => import("../pages/dashboard/Profile")));

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
      { path: "resetPassword", element: <ResetPassword /> },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
      { path: "app", element: <GeneralApp /> },
      { path: "setting", element: <Settings /> },
      { path: "login", element: <Login /> },
      { path: "groupChat", element: <GroupChat /> },
      { path: "call", element: <Call /> },
      { path: "profile", element: <Profile /> },
      { path: "404", element: <Page404 /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
  { path: "*", element: <Navigate to="/404" replace /> },
]);

export default router;
