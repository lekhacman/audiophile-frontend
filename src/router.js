import { createBrowserRouter } from "react-router";
import HomePage from "./module/home/HomePage.jsx";
import AdminDashboardPage from "./module/admin/DashboardPage.jsx";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/admin", Component: AdminDashboardPage },
]);

export default router;
