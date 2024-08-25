const apikey = "7e2c98b81fbad6bc676a443fe6f3faac";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
  
async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }
    else{

    var data = await response.json();

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".country").innerHTML = data.sys.country ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

if(data.weather[0].main == "Clouds"){
    weathericon.src = "Images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weathericon.src = "Images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weathericon.src = "Images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "Images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weathericon.src = "Images/mist.png";
}
else if(data.weather[0].main == "Snow"){
    weathericon.src = "Images/snow.png";
}
document.querySelector(".error").style.display = "none";

    }

}

searchbtn.addEventListener("click", ()=>{
checkWeather(searchbox.value);

});





