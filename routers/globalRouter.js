import express from "express";
import routes from "../routes";
import { getCategoryList, hello } from "../controller/globalController";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/authMiddleware";
import { getProfile, postJoin, postLogin } from "../controller/authController";
import { updateUserData, updateUserPw } from "../controller/myPageController";

const globalRouter = express.Router();

// globalRouter.get(routes.home, hello);
globalRouter.get(routes.profile, isLoggedIn, getProfile);
globalRouter.post(routes.join, postJoin);
globalRouter.post(routes.login, postLogin);
globalRouter.post(routes.cusUpdate(), updateUserData);
globalRouter.post(routes.cusPwUpdate(), updateUserPw);

//홈
//카테고리 리스트 조회
globalRouter.get(routes.home, getCategoryList);

export default globalRouter;
