import models from "../models";
const Category = models.Category;

export const getCategories = (req, res, next) => {
  Category.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};
