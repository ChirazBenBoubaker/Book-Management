import express from "express";
import { AddEvent } from "../Controller/event.js";

const Eventrouter = express.Router();

//routers

Eventrouter.post("/", AddEvent);

export default Eventrouter;
