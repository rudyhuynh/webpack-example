import { ReactIcon } from "./ReactIcon";
import "./App.css";

type AppProps = {
  height?: number;
};
export const App = (props: AppProps) => {
  return (
    <h1 className="title">
      <ReactIcon height={props.height ?? 30} /> React App
    </h1>
  );
};
