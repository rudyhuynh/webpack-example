import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { App2 } from "./App2";
import { Root } from "../../shared/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root title="App No. 2">
      <App2 />
    </Root>
  </StrictMode>
);
