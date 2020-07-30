const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

const stringCutter = (str) => {
  let newStr = "";
  for (let i = 2; i < str.length; i += 3) {
    newStr += str[i];
  }
  return { return_string: newStr };
};

app.post("/test", (req, res) => {
  const { string_to_cut } = req.body;

  if (string_to_cut && typeof string_to_cut === "string") {
    res.json(stringCutter(string_to_cut));
  } else {
    res.status(400).send("Something broke");
  }
  res.end();
});
