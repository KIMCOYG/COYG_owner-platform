const express = require("express");
const routes = require("../routes");
// const getCategory = require("../controller/categoryController").getCategory;

var categoryRouter = express.Router();

// const hello = () => {
//   console.log("hello");
// };

categoryRouter.get(routes.category, function (req, res, next) {
  console.log("asfasd");
  next();
});

module.exports = categoryRouter;
