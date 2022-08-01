var searchCity = document.querySelector("#searchBtn");
var city = document.querySelector("#enterCity");

searchCity.addEventListener("click", Citysearch);

function Citysearch() {
   var input = city.value 
    var url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
    fetch(url).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data);
        var lat = data[0].lat
        var lon = data[0].lon
        var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac75e314d25573644ae4d9a903da5c8c&units=imperial`
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".cityName").innerText = input + " " + moment.unix(data.current.dt).format("MMMM Do YYYY");
            document.querySelector(".icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".temp").innerText = "Temp: " + data.current.temp + " F";
            document.querySelector(".wind").innerText = "Wind: " + data.current.wind_speed + " MPH";
            document.querySelector(".humidity").innerText = "Humidity: " + data.current.humidity + "%";
            document.querySelector(".uv").innerText = "UV Index: " + data.current.uvi;

            


        })
    })
};
