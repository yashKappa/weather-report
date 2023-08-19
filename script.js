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
        weatherIcon.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.sex.com%2Fimages%2Fpinporn%2F2021%2F07%2F18%2F25572862.gif%3Fwidth%3D460&tbnid=JLoHPije9xf9TM&vet=10CCUQMyhxahcKEwiAxJ3njemAAxUAAAAAHQAAAAAQOg..i&imgrefurl=https%3A%2F%2Fwww.sex.com%2Fsearch%2Fgifs%3Fquery%3Dlittle%2Bwhore&docid=e2USQZjNX5mvcM&w=393&h=302&q=little%20cherry%20english%20gifs&hl=en-GB&client=ms-android-xiaomi-rvo2&ved=0CCUQMyhxahcKEwiAxJ3njemAAxUAAAAAHQAAAAAQOg";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.sex.com%2Fimages%2Fpinporn%2F2021%2F07%2F18%2F25572862.gif%3Fwidth%3D460&tbnid=JLoHPije9xf9TM&vet=10CCUQMyhxahcKEwiAxJ3njemAAxUAAAAAHQAAAAAQOg..i&imgrefurl=https%3A%2F%2Fwww.sex.com%2Fsearch%2Fgifs%3Fquery%3Dlittle%2Bwhore&docid=e2USQZjNX5mvcM&w=393&h=302&q=little%20cherry%20english%20gifs&hl=en-GB&client=ms-android-xiaomi-rvo2&ved=0CCUQMyhxahcKEwiAxJ3njemAAxUAAAAAHQAAAAAQOg";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.sex.com%2Fimages%2Fpinporn%2F2021%2F07%2F18%2F25572862.gif%3Fwidth%3D460&tbnid=JLoHPije9xf9TM&vet=10CCUQMyhxahcKEwiAxJ3njemAAxUAAAAAHQAAAAAQOg..i&imgrefurl=https%3A%2F%2Fwww.sex.com%2Fsearch%2Fgifs%3Fquery%3Dlittle%2Bwhore&docid=e2USQZjNX5mvcM&w=393&h=302&q=little%20cherry%20english%20gifs&hl=en-GB&client=ms-android-xiaomi-rvo2&ved=0CCUQMyhxahcKEwiAxJ3njemAAxUAAAAAHQAAAAAQOg";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="https://images.app.goo.gl/wqJU1qcDqvpoxWSg7";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="https://images.app.goo.gl/wqJU1qcDqvpoxWSg7";
    }
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src ="https://images.app.goo.gl/wqJU1qcDqvpoxWSg7";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="snow.png";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

