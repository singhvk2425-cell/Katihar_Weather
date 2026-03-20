const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"; // Demo Key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        alert("Shahar ka naam galat hai!");
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Mausam ke hisaab se icon badalna
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://img.icons8.com/fluency/96/clouds.png";
        } else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "https://img.icons8.com/fluency/96/sun.png";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "https://img.icons8.com/fluency/96/rain.png";
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://img.icons8.com/fluency/96/drizzle.png";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "https://img.icons8.com/fluency/96/mist.png";
        }
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
