import { ReactIcon } from "./ReactIcon";
import "./App.css";

type AppProps = {
  /* ... */
};
export const App = (props: AppProps) => {
  return (
    <h1 className="title">
      <ReactIcon {...props} /> React App
    </h1>
  );
};
