const express = require("express");
const app = express();

app.get("/gadgets", (req, res) => {
  res.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3000);
