//API details
const API_KEY ="";
const BASE_URL ="https://api.openweathermap.org/data/2.5/weather";

const input=document.getElementById("cityInput");
const button =document.getElementById("getWeatherBtn");
const result =document.getElementById("weatehrResult");

//fetch weather data
async function getWeather(city) {
    try{
        //Build API URL
        const url ='${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric';

        //Fetch data from API
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("City not found");
        }

        //Convert response to JSON
        const data =await response.json();

        //Extract useful info
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        //Display result
        result.innerHTML = `
        <h3>Weather in ${city}</h3>
        <p>🌡Temperature: ${temperature}℃</p>
        <p>☁Condition: ${description}</p>
        `;
    } catch (error) {
        //Handle errors (wrong city name)
        result.innerHTML =`<p style="color:red;">${error.message}</p>`;
    }
 }
 //Add click event to button
 button.addEventListener("click",() => {
    const city =input.value.trim();
    if(city) {
        getWeather(city);
    }else {
        result.innerHTML =`<p style="color:red;">JUJA!</P>`;
    }
    });
 
