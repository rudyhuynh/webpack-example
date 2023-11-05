import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div style={{ height: 20 }} />
      <div>
        Welcome to Prettier Demo. This app helps you quickly
        <br className="lg-break" /> format your Typescript code by using{" "}
        <a href="https://prettier.io/">Prettier</a>.
      </div>
      <div style={{ height: 20 }} />
      <div>
        <button
          className="get-start-btn"
          onClick={() => navigate("/prettier-demo")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
