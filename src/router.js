import { createBrowserRouter } from "react-router";
import HomePage from "./module/home/HomePage.jsx";
import AdminDashboardPage from "./module/admin/DashboardPage.jsx";
import LoginPage from "./module/auth/LoginPage.jsx";
import UserPage from "./module/user/UserPage.jsx";
import CreateUserPage from "./module/user/CreateUserPage.jsx";

const router = createBrowserRouter([
  { path: "/", loader: HomePage.loader, Component: HomePage },
  { path: "/login", Component: LoginPage },
  {
    path: "/admin",
    loader: AdminDashboardPage.loader,
    Component: AdminDashboardPage,
  },
  { path: "/user/:id", Component: UserPage },
  { path: "/create-user", Component: CreateUserPage },
]);

export default router;
