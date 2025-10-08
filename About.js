const express = require("express");
const app = express();
app.use(express.json());

app.get("/about", (req,res) =>{
    let users=[{name:"TOXIC", age:19}];
    res.json(users);
});
app.listen(3000, () =>{
    console.log("Server running on port 3000");
});