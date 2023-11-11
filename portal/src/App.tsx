import "./App.css";
import { App as App1 } from "app1/App";
import { App as App2 } from "app2/App";

export const App = () => {
  return (
    <div className="App">
      <div className="app1-container">
        <App1 text={"Some text"} />
      </div>
      <div className="app2-container">
        <App2 />
      </div>
    </div>
  );
};
