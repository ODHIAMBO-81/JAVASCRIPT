//Import dependancies
const express =require("express");
const morgan =require("morgan");
const axios =require("axios");

const app =express();
const PORT =3000;

//Middleware
app.use(morgan("dev"));

//API key and base URL
const API_KEY ="a16984955882f66f42ce62e172f8fadb";

const BASE_URL ="https://api.openweathermap.org/data/2.5/weather";

//Route: Home
app.get("/", (req, res) =>{
    res.send("Welcome to Tiny Weather API Server");
});


//Route: Get weather for a city
app.get("/Weather/:city", async (req, res) =>{
    const city =req.params.city;

    try{
        const response =await axios.get(BASE_URL, {
            params:{
                q:city,
                appid:API_KEY,
                units:"metric",
            },

        });

        const data =response.data;
        res.json({
            city:data.name,
            temperature: `${data.main.temp}  ℃`,
            condition: data.weather[0].description,
         });
    }catch (error) {
        res.status(404).json({error: "City not found or API error"});
    }
});

//Start server
app.listen(PORT, () =>{
    console.log(`Server running on https://localhost:${PORT}`);
});
