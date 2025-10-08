//Import express
const express =require("express");
const app = express9();

//Create a simple route
app.get("/", (req, res) => {
    res.send("Hello World from Express");
});

//Start server
app.listen(3000, () =>{
    console.log("Server running on https://localhost:3000");
});