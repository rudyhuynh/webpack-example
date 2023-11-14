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
  resp.send("Hello World!");
});

// --- End Routes

app.listen(4001, function () {
  console.log(`Server started at http://localhost:4001 !`);
});
