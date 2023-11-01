import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { AboutPage } from "./AboutPage";
import { Root } from "../../components/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root>
      <AboutPage />
    </Root>
  </StrictMode>
);
