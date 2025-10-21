const express =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userModel");

const app = express();
app.use(cors());
app.use(express.json());

//connect to MongoDB Atlas
mongoose.connect("")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.log.error("MongoDB connection error:", err));
//CRUD Routes
//Create User
app.post("/users", async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Read All Users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

//Update user
app.put("/users/:id", async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new:
           
true });
     res.json(updated);
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete User
app.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });

    }catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on 
    http://localhost:${PORT}`));

