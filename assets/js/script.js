
// Declare variables
var searchCity = document.querySelector("#searchBtn");
var city = document.querySelector("#enterCity");


// Retrieve history of searches if present otherwise setting up empty history
var searches = JSON.parse(localStorage.getItem("searches")) || [];
console.log(searches);

searchCity.addEventListener("click", citySearch);

function displayHistory() {
    $(".searches").empty();

    for (let i = 0; i < searches.length; i++) {
     console.log(i);


// Create button to display search history and can click on it to see current and future conditions  
var searchBox = document.querySelector(".saved-cities");

  searchBox.innerHTML = ('');

     var button = document.createElement("BUTTON");
     button.innerText = (searches[i]);
     button.addEventListener("click", citySearch);
     searchBox.append(button);


    //  var button = $("button")
    //  button.text(searches[i])
    //  $(".saved-cities").append(button);
    }  
}


displayHistory();

// citySearch function displays current forecast and five-day forecast using OpenWeather One Call API
// fetch() and moment() are used to display information 
function citySearch() {
   var input = city.value 
   if (!searches.includes(input)){
   searches.push(input)

// Resave searches in local storage 
   localStorage.setItem("searches", JSON.stringify(searches));

   }

displayHistory();

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
            let capitalizedCity = capCity(input)
            capCity(input);
            document.querySelector(".cityName").innerText = capitalizedCity + ", " + moment.unix(data.current.dt).format("MMMM Do YYYY");
            document.querySelector(".icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`);
            document.querySelector(".temp").innerText = "Temp: " + data.current.temp + " F";
            document.querySelector(".wind").innerText = "Wind: " + data.current.wind_speed + " MPH";
            document.querySelector(".humidity").innerText = "Humidity: " + data.current.humidity + "%";
            document.querySelector(".uv").innerText = "UV Index: " + data.current.uvi;
        displayUv(data.current.uvi);
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".firstWeeklyForecast").innerText = moment().add(1, 'days').format("MM/DD/YYYY");
            document.querySelector(".icon1").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`);
            document.querySelector(".temp1").innerText = "Temp: " + data.daily[0].temp.day + " F";
            document.querySelector(".wind1").innerText = "Wind: " + data.daily[0].wind_speed + " MPH";
            document.querySelector(".humidity1").innerText = "Humidity: " + data.daily[0].humidity + "%";
            $("#firstDayFiveDay").addClass("card");
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".secondWeeklyForecast").innerText = moment().add(2, 'days').format("MM/DD/YYYY");
            document.querySelector(".icon2").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`);
            document.querySelector(".temp2").innerText = "Temp: " + data.daily[1].temp.day + " F";
            document.querySelector(".wind2").innerText = "Wind: " + data.daily[1].wind_speed + " MPH";
            document.querySelector(".humidity2").innerText = "Humidity: " + data.daily[1].humidity + "%";
            $("#secondDayFiveDay").addClass("card");
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".thirdWeeklyForecast").innerText = moment().add(3, 'days').format("MM/DD/YYYY");
            document.querySelector(".icon3").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`);
            document.querySelector(".temp3").innerText = "Temp: " + data.daily[2].temp.day + " F";
            document.querySelector(".wind3").innerText = "Wind: " + data.daily[2].wind_speed + " MPH";
            document.querySelector(".humidity3").innerText = "Humidity: " + data.daily[2].humidity + "%";
            $("#thirdDayFiveDay").addClass("card");
           
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".fourthWeeklyForecast").innerText = moment().add(4, 'days').format("MM/DD/YYYY");
            document.querySelector(".icon4").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`);
            document.querySelector(".temp4").innerText = "Temp: " + data.daily[3].temp.day + " F";
            document.querySelector(".wind4").innerText = "Wind: " + data.daily[3].wind_speed + " MPH";
            document.querySelector(".humidity4").innerText = "Humidity: " + data.daily[3].humidity + "%";
            $("#fourthDayFiveDay").addClass("card");
            
        })
        fetch(url).then(function(res){
            return res.json()
        }).then(function(data){
            console.log(data);
            document.querySelector(".fifthWeeklyForecast").innerText = moment().add(5, 'days').format("MM/DD/YYYY");
            document.querySelector(".icon5").setAttribute("src", `https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`);
            document.querySelector(".temp5").innerText = "Temp: " + data.daily[4].temp.day + " F";
            document.querySelector(".wind5").innerText = "Wind: " + data.daily[4].wind_speed + " MPH";
            document.querySelector(".humidity5").innerText = "Humidity: " + data.daily[4].humidity + "%";
            $("#fifthDayFiveDay").addClass("card");
    
        })
    })
};

// Uv Index colors to display favorable, moderate, severe conditions
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
}};


// let capitalizedCity = capCity(input)
function capCity(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
console.log(capCity('hello'));


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