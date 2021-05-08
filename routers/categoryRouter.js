// const express = require("express");
// const routes = require("../routes");
import express from "express";
import routes from "../routes";
import { getCategories } from "../controller/categoryController";

var categoryRouter = express.Router();

categoryRouter.get(routes.read, getCategories);

export default categoryRouter;
