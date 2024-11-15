import http from "http"
import app from "./app.js"
const PORT = process.env.PORT ||5000 
const server= http.createServer(app)
server.listen (PORT , function() {
    console.log("Serveur running on port" + PORT)
})





// import http from "http"
// const server= http.createServer((req,res)=> {
//     res.end("voila la repense du serveur !")
// })

// server.listen(process.env.PORT ||5000 )

// // export const sqrt= 500
// // export const pi=3.14

// // export default function hello() {
// //     console.log("Hello")
// // }

