var searchCity = document.querySelector("#searchBtn");
var city = document.querySelector("#enterCity");

searchCity.addEventListener("click", Citysearch);

function Citysearch() {
   var input = city.value 
    var url = `https://fast-dawn-89938.herokuapp.com/api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
    // var url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
    fetch(url).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data);
        var lat = data[0].lat
        var lon = data[0].lon
        var url = `https://fast-dawn-89938.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac75e314d25573644ae4d9a903da5c8c&units=imperial`
        // var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac75e314d25573644ae4d9a903da5c8c&units=imperial`
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".cityName").innerText = input + " " + moment.unix(data.current.dt).format("MMMM Do YYYY");
            document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            // document.querySelector(".icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".temp").innerText = "Temp: " + data.current.temp + " F";
            document.querySelector(".wind").innerText = "Wind: " + data.current.wind_speed + " MPH";
            document.querySelector(".humidity").innerText = "Humidity: " + data.current.humidity + "%";
            document.querySelector(".uv").innerText = "UV Index: " + data.current.uvi;
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".weeklyForecast").innerText = input + " " + moment.unix(data.daily.dt).format("MMMM Do YYYY");
            document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            // document.querySelector(".icon1").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily.weather[0].icon}@2x.png`);
            document.querySelector(".temp1").innerText = "Temp: " + data.daily.temp + " F";
            document.querySelector(".wind1").innerText = "Wind: " + data.daily.wind_speed + " MPH";
            document.querySelector(".humidity1").innerText = "Humidity: " + data.daily.humidity + "%";
            document.querySelector(".uv1").innerText = "UV Index: " + data.daily.uvi;
        })
    })
};
