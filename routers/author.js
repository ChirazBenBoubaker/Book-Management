import express from "express";
import { loggedMiddleware, isAdmin } from "../Middleware/User.js";
import { AddAuthor, fetchAuthor , getAuthorByID } from "../Controller/Author.js";

const Authorrouter = express.Router();

//routers

Authorrouter.get("/", loggedMiddleware, isAdmin, fetchAuthor);
Authorrouter.get("/:id", getAuthorByID);
Authorrouter.post("/", AddAuthor);

export default Authorrouter;
