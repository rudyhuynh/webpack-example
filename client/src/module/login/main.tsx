import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { Login } from "./Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
