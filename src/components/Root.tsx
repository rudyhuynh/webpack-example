import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Root = () => {
  return (
    <div className="app">
      <NavigationBar />
      <div className="page-content">
        <ErrorBoundary fallback={<div>Something went wrong!!!</div>}>
          <Suspense>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
