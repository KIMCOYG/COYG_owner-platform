const express = require("express");
const sequelize = require("./models/index").sequelize;
// const mysql = require("mysql");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));

// var connection = mysql.createConnection({
//   host: "coyg.cwrvhsz1pk6u.ap-northeast-2.rds.amazonaws.com",
//   port: 3306,
//   user: "admin",
//   password: "whwqkq3!",
//   database: "coyg",
// });
// connection.connect();

const PORT = 5000;

const app = express();
sequelize.sync().then(() => {
  console.log("성공");
});
app.set("port", process.env.PORT || PORT);
// app.get("/test", (req, res) => {
//   connection.query("SELECT * FROM CATEGORIES", function (err, result, fields) {
//     if (err) {
//       res.send("err: " + err);
//     } else {
//       res.send("성공");
//     }
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello Express!!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중입니다.");
});
