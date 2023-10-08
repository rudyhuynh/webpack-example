import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";

export const Root = () => {
  return (
    <div className="app">
      <NavigationBar />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};
