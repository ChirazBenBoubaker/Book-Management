import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Task from "./models/task.js";
import User from "./models/user.js";
import routerTasks from "./routers/task.js"
import UserTasks from "./routers/user.js"
import Authrouter from "./routers/user.js";
 

const app = express();

mongoose
  .connect(
    "mongodb+srv://Chiraz:Helloworld;@cluster0.ohrrz.mongodb.net/DBisamm"
  )
  .then(function () {
    console.log("Connnection MongoDB réussi");
  })
  .catch(function (e) {
    console.log("Connnection échoué");
  });

//Middleware
app.use(cors()); //ici tous le monde passe , il faut ajouter une liste de middleware 
app.use(express.json());
app.use("/api/tasks", routerTasks)
app.use("/api/auth", Authrouter)


export default app;

// app.use((req,res,next) => {
//     console.log("First")
//     next()
// })

// app.use((req,res, next) => {
//     res.status(200).json({ message : "hello world !" })
//     next()
// })

// app.use((req,res) => {
//     console.log("Second")
// })

// promise : traitement des données de façon asynchrone si c réalisable on a 3 resultat: thrilled: en attente ,
//rejected vec une raison
// une autre façcon pur Promise : await et then , on va le traitement qu'on le met dans le then on le met juste après
//           , bcp plus clair ( similaire au synchrone mais pas vraiment )
