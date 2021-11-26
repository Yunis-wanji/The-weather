let now = new Date();

let date = now.getDate();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let hour = now.getHours();
let min = now.getMinutes();
let today = document.querySelector("p");
today.innerHTML = `${day} ${date} ${month} ${hour}:${min} ${year}`;

function showWeather(response){
  let name = document.querySelector("h1").innerHTML= response.data.name
  let temparature = document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML=Math.round(response.data.main.humidity);
  
}






function search(event) {
  event.preventDefault();

  let apiKey = "e22adb13ecfe9db5af2e8b64dfc0ed33";
  let city = document.querySelector("#search-text-input").value
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
let form = document.querySelector("#search-form")
form.addEventListener("submit",search)
