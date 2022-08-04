var searchCity = document.querySelector("#searchBtn");
var city = document.querySelector("#enterCity");

searchCity.addEventListener("click", Citysearch);

function Citysearch() {
   var input = city.value 
    // var url = `https://fast-dawn-89938.herokuapp.com/api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
    var url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
    fetch(url).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data);
        var lat = data[0].lat
        var lon = data[0].lon
        // var url = `https://fast-dawn-89938.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac75e314d25573644ae4d9a903da5c8c&units=imperial`
        var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ac75e314d25573644ae4d9a903da5c8c&units=imperial`
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".cityName").innerText = input + " " + moment.unix(data.current.dt).format("MMMM Do YYYY");
            // document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".temp").innerText = "Temp: " + data.current.temp + " F";
            document.querySelector(".wind").innerText = "Wind: " + data.current.wind_speed + " MPH";
            document.querySelector(".humidity").innerText = "Humidity: " + data.current.humidity + "%";
            document.querySelector(".uv").innerText = "UV Index: " + data.current.uvi;
            // document.querySelector(".uv-icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".firstWeeklyForecast").innerText = moment().add(1, 'days').format("MM/DD/YYYY");
            // document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".icon1").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`);
            document.querySelector(".temp1").innerText = "Temp: " + data.daily[0].temp.day + " F";
            document.querySelector(".wind1").innerText = "Wind: " + data.daily[0].wind_speed + " MPH";
            document.querySelector(".humidity1").innerText = "Humidity: " + data.daily[0].humidity + "%";
            // document.querySelector(".uv1").innerText = "UV Index: " + data.daily[0].uvi;
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".secondWeeklyForecast").innerText = moment().add(2, 'days').format("MM/DD/YYYY");
            // document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".icon2").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`);
            document.querySelector(".temp2").innerText = "Temp: " + data.daily[1].temp.day + " F";
            document.querySelector(".wind2").innerText = "Wind: " + data.daily[1].wind_speed + " MPH";
            document.querySelector(".humidity2").innerText = "Humidity: " + data.daily[1].humidity + "%";
            // document.querySelector(".uv2").innerText = "UV Index: " + data.daily[1].uvi;
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".thirdWeeklyForecast").innerText = moment().add(3, 'days').format("MM/DD/YYYY");
            // document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".icon3").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`);
            document.querySelector(".temp3").innerText = "Temp: " + data.daily[2].temp.day + " F";
            document.querySelector(".wind3").innerText = "Wind: " + data.daily[2].wind_speed + " MPH";
            document.querySelector(".humidity3").innerText = "Humidity: " + data.daily[2].humidity + "%";
            // document.querySelector(".uv3").innerText = "UV Index: " + data.daily[2].uvi;
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".fourthWeeklyForecast").innerText = moment().add(4, 'days').format("MM/DD/YYYY");
            // document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".icon4").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`);
            document.querySelector(".temp4").innerText = "Temp: " + data.daily[3].temp.day + " F";
            document.querySelector(".wind4").innerText = "Wind: " + data.daily[3].wind_speed + " MPH";
            document.querySelector(".humidity4").innerText = "Humidity: " + data.daily[3].humidity + "%";
            // document.querySelector(".uv4").innerText = "UV Index: " + data.daily[3].uvi;
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".fifthWeeklyForecast").innerText = moment().add(5, 'days').format("MM/DD/YYYY");
            // document.querySelector(".icon").setAttribute("src", `https://fast-dawn-89938.herokuapp.com/openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".icon5").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`);
            document.querySelector(".temp5").innerText = "Temp: " + data.daily[4].temp.day + " F";
            document.querySelector(".wind5").innerText = "Wind: " + data.daily[4].wind_speed + " MPH";
            document.querySelector(".humidity5").innerText = "Humidity: " + data.daily[4].humidity + "%";
            // document.querySelector(".uv5").innerText = "UV Index: " + data.daily[4].uvi;
        })
    })
};


// To do
// Add city to search history and can click on it to see cuurent and future conditions;
// Uv index must have a color that indicates whether the conditions are favorable 0-2 green, moderate 3-5 yellow, or severe 6-11 or more red; 
// no uv index for 5 day;
// Check five day forecast icons;

// Uv Index colors:

$(".uv").each(function (event) {
    console.log(this);
   var uvIndex = $(this).data("uv")

   if (uvIndex < 3) {
    $(this).addClass("favorable") 

} else if (uvIndex >=3 && uvIndex <= 5) {
    $(this).addClass("moderate")

} else {
   $(this).addClass("severe")
}

});


// Save city info into local storage:
// var container = $(".container-fluid").click(function (event) {

//     if (event.target.nodeName === "I") {

//         var buttonId = event.target.attributes[0].nodeValue;
//         var inputValue = $("." + buttonId).val()
//         localStorage.setItem(buttonId, inputValue);
//     }
// })

// $("#enterCity").val(localStorage.getItem("enterCity"));

// function saveCity(params) {
    
// }