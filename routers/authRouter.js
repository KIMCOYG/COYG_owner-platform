import express from "express";
import { isLoggedIn } from "../middlewares/authMiddleware";
import routes from "../routes";

const authRouter = express.Router();

// Router.get(routes.profile, isLoggedIn, )
