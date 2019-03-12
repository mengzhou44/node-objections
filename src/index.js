const express = require("express");
const cors = require("cors");
const parser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const port = process.env.PORT || 3000;
app.set("port", port);

app.use(cors());
app.use("/ideas", require("./routes/ideas"));

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${port} ...`);
});
