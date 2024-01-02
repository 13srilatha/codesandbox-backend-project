const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

app.post("/", function (req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("your answer is = " + result);
});
