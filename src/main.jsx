import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import { RouterProvider } from "react-router";
import router from "./router.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
