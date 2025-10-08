async function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "a16984955882f66f42ce62e172f8fadb";// 🔑 Replace with your OpenWeatherMap API key

  let url =" https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";

  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("City not found!");

    let data = await response.json();
    document.getElementById("weather").innerHTML = `ppppppppppppppppppppppppppppppppppppp
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Condition: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = <p style="color:red;">${error.message}</p>;
  }
}