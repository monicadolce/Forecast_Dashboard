var searchCity = document.querySelector("#searchBtn");
var city = document.querySelector("#enterCity");

// retrieve history of searches if present otherwise setting up empty history
var searches = JSON.parse(localStorage.getItem("searches")) || [];
console.log(searches);

searchCity.addEventListener("click", Citysearch);

function displayHistory() {
    $(".searches").empty();

    for (let i = 0; i < searches.length; i++) {
     console.log(i);
    
     var button = $("button")
     button.text(searches[i])
     $(".searches").append(button);
    }  
}
displayHistory();

function Citysearch() {
   var input = city.value 
   if (!searches.includes(input)){
   searches.push(input)
//    resaving 
   localStorage.setItem("searches", JSON.stringify(searches));

   }
displayHistory();
   
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
        displayUv(data.current.uvi);
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
            $("#firstDayFiveDay").addClass("card");
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
            $("#secondDayFiveDay").addClass("card");
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
            $("#thirdDayFiveDay").addClass("card");
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
            $("#fourthDayFiveDay").addClass("card");
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
            $("#fifthDayFiveDay").addClass("card");
            // document.querySelector(".uv5").innerText = "UV Index: " + data.daily[4].uvi;
        })
    })
};


// To do
// Add city to search history and can click on it to see current and future conditions;

// Uv Index colors:

function displayUv(uvIndex) {
    var uv = $(".uv")
    // console.log(typeof uvIndex);
   if (uvIndex < 3) {
    uv.addClass("favorable"); 

} 
else if (uvIndex >=3 && uvIndex <= 5) {
    uv.addClass("moderate");

} else {
   uv.addClass("severe");
}
}





// Save city info into local storage:
var container = $(".container-fluid").click(function (event) {

    if (event.target.nodeName === "I") {

        var buttonId = event.target.attributes[0].nodeValue;
        var inputValue = $("." + buttonId).val()
        localStorage.setItem(buttonId, inputValue);
    }
})

$("#enterCity").val(localStorage.getItem("enterCity"));

// function saveCity(params) {
    
// }