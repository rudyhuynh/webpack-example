import { NavLink, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();
  return (
    <nav>
      <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </NavLink>
      <NavLink
        to="/exp"
        className={location.pathname === "/exp" ? "active" : ""}
      >
        Exponentiation
      </NavLink>
      <NavLink
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        About
      </NavLink>
    </nav>
  );
};
