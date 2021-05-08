import express from "express";
import routes from "../routes";
import { getImages, postImage } from "../controller/imageController";

const imageRouter = express.Router();

imageRouter.get(routes.read, getImages);
imageRouter.post(routes.create, postImage);

export default imageRouter;
