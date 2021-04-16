// starts with npm run dev

import express, { json } from "express";
const app = express();
const routes = require("../back/routes/routes");
const cors = require("cors");
const models = require("../back/models/index.js");

//Importing Routes

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to home.com");
});

let port = 4000;
models.homerun
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Backend Server started on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
