import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");

app.use(express.static("public"));

// Routes
app.get("/", (req, resp) => {
  resp.render("login");
});

app.get("/landing", (req, resp) => {
  resp.render("landing");
});

app.get("/app1", (req, resp) => {
  resp.render("app1");
});

app.get("/app2", (req, resp) => {
  resp.render("app2");
});
// --- End Routes

app.listen(4001, function () {
  console.log(`Server started at http://localhost:4001 !`);
});
