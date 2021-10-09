let weather = {
  apiKey: "dc4e8d445f50e8822353a43b498eddbd",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".temp").innerHTML = temp + " °C";
    // document.querySelector(
    //   ".icon"
    // ).src = `openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML =
      "Humidity " + humidity + " %";
    document.querySelector(".wind").innerHTML = `Wind speed: ${speed} km/h`;
  },
  search: function () {
    const address = document.querySelector(".search-bar").value;
    this.fetchWeather(address);
  },
};
weather.fetchWeather("helsinki");

document.querySelector(".search-button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
