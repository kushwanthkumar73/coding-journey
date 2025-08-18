const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "28885e08fe1b462a8e5638bf6edd3c01"; // Replace with your own if needed

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerText = "Please enter a city name.";
        weatherResult.style.display = "block";
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === "404") {
            weatherResult.innerText = "City not found.";
            weatherResult.style.display = "block";
            return;
        }

        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const weather = data.weather[0].main;

        // Time logic
        const currentTime = data.dt;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const isDay = currentTime >= sunrise && currentTime <= sunset;

        // Weather emoji logic
        let weatherEmoji = isDay ? "🌞" : "🌙";
        switch (weather) {
            case "Clear":
                weatherEmoji += isDay ? " ☀️" : " 🌕";
                break;
            case "Clouds":
                weatherEmoji += " ☁️";
                break;
            case "Rain":
                weatherEmoji += " 🌧️";
                break;
            case "Drizzle":
                weatherEmoji += " 🌦️";
                break;
            case "Thunderstorm":
                weatherEmoji += " 🌩️";
                break;
            case "Snow":
                weatherEmoji += " ❄️";
                break;
            case "Mist":
            case "Haze":
            case "Fog":
                weatherEmoji += " 🌫️";
                break;
            default:
                weatherEmoji += " 🌡️";
        }

        // Change background
        document.body.className = isDay ? "day" : "night";

        // Show result
        weatherResult.innerHTML = `
      <h2>${weatherEmoji} ${data.name}, ${data.sys.country}</h2>
      <p><strong>🌡️ Temp:</strong> ${temp}°C</p>
      <p><strong>💧 Humidity:</strong> ${humidity}%</p>
      <p><strong>💨 Wind Speed:</strong> ${wind} km/h</p>
      <p><strong>☁️ Condition:</strong> ${weather}</p>
    `;
        weatherResult.style.display = "block";
    } catch (error) {
        weatherResult.innerText = "Error fetching data.";
        weatherResult.style.display = "block";
        console.error(error);
    }
});