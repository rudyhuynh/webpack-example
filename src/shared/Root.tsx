import { NavigationBar } from "./NavigationBar";
import { ReactNode } from "react";

import "./Root.css";

export const Root = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="root">
      <NavigationBar title={title} />
      <div className="page-content">{children}</div>
    </div>
  );
};
