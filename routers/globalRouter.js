import express from "express";
import routes from "../routes";
import { hello } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, hello);

export default globalRouter;
