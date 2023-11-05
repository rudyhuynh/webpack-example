import ReactDOM from "react-dom/client";
import { Root } from "./components/Root";
import { StrictMode } from "react";
import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PrettierDemo } from "./components/PrettierDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/prettier-demo",
        element: <PrettierDemo />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
