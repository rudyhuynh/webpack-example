export const NavigationBar = () => {
  return (
    <nav>
      <a
        href="home.html"
        className={location.pathname.endsWith("/home.html") ? "active" : ""}
      >
        Home
      </a>
      <a
        href="math.html"
        className={location.pathname === "/math.html" ? "active" : ""}
      >
        Exponentiation
      </a>
      <a
        href="about.html"
        className={location.pathname.endsWith("about.html") ? "active" : ""}
      >
        About
      </a>
    </nav>
  );
};
