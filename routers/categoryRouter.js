// const express = require("express");
// const routes = require("../routes");
import express from "express";
import routes from "../routes";
import { getCategories } from "../controller/categoryController";

const categoryRouter = express.Router();

categoryRouter.get(routes.readAll, getCategories);

export default categoryRouter;
