import multer from "multer";
import path from "path";
import fs from "fs";
import models from "../models";
const Image = models.Image;

export const mkFolder = async (req, res, next) => {
  try {
    const result = await fs.readdir("front/src/uploads", (err, files) => {
      if (err) {
        console.log("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
        fs.mkdirSync("front/src/uploads");
      }
      console.log(files);
      next();
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getTest = async (req, res, next) => {
  res.send({ message: "asfdsf" });
};

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "front/src/uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const imgDefine = async (req, res, next) => {
  const image_name = req.file.filename;
  const image_path = req.file.path;
  try{
    const result = await Image.create({
      image_name,
      image_path,
      enabled: true
    })
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}` }); 
  } catch(err) {
    console.log(err);
    next(err);
  }
};


// export const uploadAll = multer();
// export const imgDefineAll = async (req, res, next) => {
//   try{
//     const post = await models.Image.create({
//       image_id: req.body.image_id,
//     });
//   }
// };
