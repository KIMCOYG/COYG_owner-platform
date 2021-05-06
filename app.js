const express = require("express");
const sequelize = require("./models/index").sequelize;
const Category = require("./models").Category;
const Event = require("./models").Event;
const Image = require("./models").Image;
const Like = require("./models").Like;
// const mysql = require("mysql");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

const app = express();
sequelize
  .sync()
  .then(() => {
    console.log("mysql success");
  })
  .catch((err) => {
    console.log("mysql error");
  });
app.set("port", process.env.PORT || PORT);
app.get("/test", (req, res) => {
  Like.findAll()
    .then((users) => {
      res.send({ users });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

app.get("/", (req, res) => {
  res.send("Hello Express!!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중입니다.");
});
