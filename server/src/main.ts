import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const port = process.argv[2];

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");

app.use(express.static("public"));

// // Routes
app.get("/", (req, resp) => {
  resp.render("common", {
    page: "../pages/login",
    serverData: "123",
  });
});

app.get("/landing", (req, resp) => {
  resp.render("common", {
    page: "../pages/landing",
    serverData: "123",
  });
});

app.get("/app1", (req, resp) => {
  resp.render("common", {
    page: "../pages/app1",
    serverData: "123",
  });
});
app.get("/app2", (req, resp) => {
  resp.render("common", {
    page: "../pages/app2",
    serverData: "123",
  });
});
// --- End Routes

app.listen(port, function () {
  console.log(`Server started at http://localhost:${port} !`);
});
