import ReactDOM from "react-dom/client";
import { Root } from "./components/Root";
import { StrictMode } from "react";
import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import React from "react";
// import { PrettierDemo } from "./components/PrettierDemo";

const PrettierDemo = React.lazy(() => import("./components/PrettierDemo"));

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
        // lazy: async () => {
        //   const { PrettierDemo } = await import("./components/PrettierDemo");
        //   return {
        //     Component: PrettierDemo,
        //   };
        // },
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
