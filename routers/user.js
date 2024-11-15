import { SignUp, login } from "../Controller/Auth.js";
import User from "../models/user.js";
import express from "express";


const Authrouter = express.Router();

//routers
Authrouter.post("/signUp", SignUp);
Authrouter.post("/login", login);

export default Authrouter;
