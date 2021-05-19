import express from "express";
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent, getEventsJoin,
} from "../controller/eventController";
import { createImage } from "../controller/imageController";
import routes from "../routes";

const eventRouter = express.Router();

eventRouter.get(routes.readAll, getEventsJoin);
eventRouter.get(routes.read(), getEvent);
eventRouter.post(routes.create, createImage, createEvent);
eventRouter.put(routes.update(), updateEvent); //수정 시 이미지 어떻게 할 지 생각
eventRouter.put(routes.remove(), deleteEvent);

export default eventRouter;
