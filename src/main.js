import "./style.css";
import webpackLogo from "./assets/webpack-logo.svg";

function main() {
  const root = document.getElementById("root");
  root.textContent = "Modern Javascript App with ";

  const img = document.createElement("img");
  img.src = webpackLogo;
  root.append(img);
}

main();
