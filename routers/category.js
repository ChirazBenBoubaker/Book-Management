import express from "express";
import { AddCategory } from "../Controller/Category.js";

const Categoryrouter = express.Router();

//routers

Categoryrouter.post("/", AddCategory);

export default Categoryrouter;
