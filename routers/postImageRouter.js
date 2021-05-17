import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import models from "../models";
import routes from "../routes";
import { getTest } from "../controller/postImageController";
const Image = models.User;

const postImageRouter = express.Router();
// fs.readdir("public", (err, files) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(files);
// });

postImageRouter.get(routes.home, getTest);

export default postImageRouter;
