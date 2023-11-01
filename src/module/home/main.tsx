import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { HomePage } from "./HomePage";
import { Root } from "../../components/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root>
      <HomePage />
    </Root>
  </StrictMode>
);
