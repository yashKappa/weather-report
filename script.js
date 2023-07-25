const apiKey = "31ea064be1b494428d44e68083399fa0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://myteenwebcam.com/fapp/gifs/9c0bcd2c5922acf7a8131208fbb8f0db.gif";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="https://porngifs.xxx/wp-content/uploads/2023/04/dp-blow-porn-gifs-sex-gif.gif";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="https://gifcandy.net/wp-content/uploads/2022/11/gifcandy-1.gif";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="https://megapornx.com/xxx/milf-gifs-porn-gifs-1.gif";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="https://cdn5-images.motherlessmedia.com/images/DD6A3F1.gif";
    }
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src ="https://myteenwebcam.com/fapp/gifs/9c0bcd2c5922acf7a8131208fbb8f0db.gif";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="https://porngifs.xxx/wp-content/uploads/2023/04/dp-blow-porn-gifs-sex-gif.gif";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

