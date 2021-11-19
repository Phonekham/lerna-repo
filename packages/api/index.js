const express = require("express");
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Test server");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("listen to port 5000");
  }
});
