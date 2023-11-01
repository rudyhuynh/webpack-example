import { NavigationBar } from "./NavigationBar";
import { ReactNode } from "react";

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app">
      <NavigationBar />
      <div className="page-content">{children}</div>
    </div>
  );
};
