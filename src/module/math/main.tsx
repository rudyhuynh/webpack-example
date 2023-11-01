import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { ExponentiationPage } from "./ExponentiationPage";
import { Root } from "../../components/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root>
      <ExponentiationPage />
    </Root>
  </StrictMode>
);
