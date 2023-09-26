import { renderExp } from "./renderExp";
import "./style.css";

function main() {
  const root = document.getElementById("root");
  if (root) {
    root.textContent = renderExp(2, 5);
  } else {
    throw new Error("root element not found!");
  }
}

main();
