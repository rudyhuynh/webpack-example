import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <div style={{ height: 20 }} />
      <div>This is home page...</div>
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
