require("dotenv").config();
const express = require("express");
const routes = require("./routes/index");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("*", (req, res) => {
  res.send("Pravaler Squad");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});