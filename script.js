let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Tuersday",
  "Friday",
  "Sarurday",
  "Sunday",
];
let InfoDay = document.querySelector("#info-day");
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
InfoDay.innerHTML = `${day} ,${hour}:${minute}`;

function Search(event) {
  event.preventDefault();
  let Search = document.querySelector("#input-city");
  let city = document.querySelector("#city");
  city.innerHTML = Search.value;
}

let form = document.querySelector("#form-serch");
form.addEventListener("submit", Search);

function convertFa(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = -8 + "°";
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertFa);

function convertCe(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = 16 + "°";
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertCe);
