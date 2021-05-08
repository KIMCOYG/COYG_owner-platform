import models from "../models";
const Image = models.Image;

export const getImages = (req, res, next) => {
  Image.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
};

export const postImage = (req, res, next) => {
  Image.create({
    image_name: req.body.image_name,
    image_path: req.body.image_path,
    enabled: true,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};
