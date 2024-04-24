const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f6f60c63731ed66826a2dfbc149be059";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.4923615&lon=127.0292881&appid=f6f60c63731ed66826a2dfbc149be059&lang=kr'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.data;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);