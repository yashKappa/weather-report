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
        weatherIcon.src = "https://s2.pictoa.com/media/galleries/259/719/2597195fdfca39e2ed7/37571275fdfca3b0f2d0.gif";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="https://s2.pictoa.com/media/galleries/259/719/2597195fdfca39e2ed7/37571275fdfca3b0f2d0.gif";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="https://s2.pictoa.com/media/galleries/259/719/2597195fdfca39e2ed7/37571275fdfca3b0f2d0.gif";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="https://s2.pictoa.com/media/galleries/259/719/2597195fdfca39e2ed7/37571275fdfca3b0f2d0.gif";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="https://s2.pictoa.com/media/galleries/259/719/2597195fdfca39e2ed7/37571275fdfca3b0f2d0.gif";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="https://s2.pictoa.com/media/galleries/259/719/2597195fdfca39e2ed7/37571275fdfca3b0f2d0.gif";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

const darkModePreference = localStorage.getItem('darkMode');
const dark = document.getElementById("dark");
const loo = document.getElementById("loo");

if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-theme');
    dark.src = "https://ps.w.org/dark-mode-for-wp-dashboard/assets/icon-256x256.png?rev=2404672"; 
} else {
    dark.src = "https://static.thenounproject.com/png/4808961-200.png";
}

dark.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem('darkMode', 'enabled');
        dark.src = "https://ps.w.org/dark-mode-for-wp-dashboard/assets/icon-256x256.png?rev=2404672";
    } else {
        localStorage.setItem('darkMode', 'disabled');
        dark.src = "https://static.thenounproject.com/png/4808961-200.png";
    }
}
