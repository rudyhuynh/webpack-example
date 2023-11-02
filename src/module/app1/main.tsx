import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { App1 } from "./App1";
import { Root } from "../../shared/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root title="App No. 1">
      <App1 />
    </Root>
  </StrictMode>
);
