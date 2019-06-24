const express = require("express");
const request = require("request");
const basicAuth = require("express-basic-auth");

const chalk = require("chalk");

const log = console.log;
const PORT = process.env.PORT || 4000;

const app = express();

app.use(
  basicAuth({
    users: { admin: "supersecret" },
    challenge: true
  })
);

app.get("/", (req, res, next) => {
  //console.log(req);
  //console.log(res);
  res.send("Hello, World!");
});

app.listen(PORT, () =>
  log(chalk.bold.yellow(`Server started at port: ${PORT}`))
);
