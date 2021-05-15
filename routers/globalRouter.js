import express from "express";
import routes from "../routes";
import { hello } from "../controller/globalController";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/authMiddleware";
import { getProfile, postJoin } from "../controller/authController";

const globalRouter = express.Router();

globalRouter.get(routes.home, hello);
globalRouter.get(routes.profile, isLoggedIn, getProfile);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
