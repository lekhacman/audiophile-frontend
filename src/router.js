import { createBrowserRouter } from "react-router";
import HomePage from "./module/home/HomePage.jsx";
import AdminDashboardPage from "./module/admin/AdminDashboardPage.jsx";
import LoginPage from "./module/auth/LoginPage.jsx";
import UserPage from "./module/user/UserPage.jsx";
import CreateUserPage from "./module/user/CreateUserPage.jsx";
import DashboardPage from "./module/audio/DashboardPage.jsx";
import AudioPlayer from "./module/audio/AudioPlayer.jsx";
import UploadPage from "./module/audio/UploadPage.jsx";

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
  {
    path: "/dashboard",
    loader: DashboardPage.loader,
    Component: DashboardPage,
  },
  { path: "/audio/:id", Component: AudioPlayer },
  { path: "/upload-audio", Component: UploadPage },
]);

export default router;
