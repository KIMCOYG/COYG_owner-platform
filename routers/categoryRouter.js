// const express = require("express");
// const routes = require("../routes");
import express from "express";
import routes from "../routes";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controller/categoryController";
import { createImage } from "../controller/imageController";

const categoryRouter = express.Router();

categoryRouter.get(routes.readAll, getCategories);
categoryRouter.get(routes.read(), getCategory);
categoryRouter.post(routes.create, createImage, createCategory);
categoryRouter.put(routes.update(), createImage, updateCategory);
categoryRouter.put(routes.remove(), deleteCategory);

export default categoryRouter;
