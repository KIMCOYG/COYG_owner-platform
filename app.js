const express = require("express");
const mysql = require("mysql");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

const app = express();
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
