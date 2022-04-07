var citySearch = "http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid=7395305ec624eec55c8c9f460f751d9d"
var urlData = document.location.search;
var searchTerm = $("#searchTerm");
var submitBtn = $("#submit");
var currentContainer = $(".today")
var cT = $("#currentTemp");
var cW = $("#currentWind");
var cH = $("#currentHumidity");
var cU = $("#currentUvi");
var cI = $("#currentIcon");


submitBtn.on("click", function(event) {
    event.preventDefault();
    var newURL = citySearch.split("{city name}").join(searchTerm.val());
    console.log(newURL);

var coords 

fetch (newURL)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        // console.log(data[0].lat);
coords = {
    lat: data[0].lat.toFixed(2),
    lon: data[0].lon.toFixed(2),
    };
// console.log(coords)


var secondUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coords.lat + "&lon=" + coords.lon + "&exclude=minutely,hourly,alerts&limit=5&units=imperial&appid=7395305ec624eec55c8c9f460f751d9d"
console.log(secondUrl);
fetch (secondUrl)
    .then (function(response) {
        return response.json();
    })
    .then (function(data) {
        // console.log(data)
        var currentTemp = data.current.temp;
        var currentWind = data.current.wind_speed;
        var currentHumidity = data.current.humidity;
        var currentUvi = data.current.uvi;
        var currentIconCode = data.current.weather[0].icon;
        var currentIconUrl = "http://openweathermap.org/img/wn/" + currentIconCode + "@2x.png";
        // console.log(currentIcon);
        // var fiveDay = for (var i = 0; i < 6; i++) {
        //     var day = [data[0].daily[i].temp, data[0].daily[i].wind_speed, data[0].daily[i].humidity]
    
        cT.append(currentTemp);
        cT.text("Temperature: " + currentTemp + " °F");
        cW.append(currentWind);
        cW.text("Wind Speed: " + currentWind + " mph");
        cH.append(currentHumidity);
        cH.text(" Humidity: " + currentHumidity + " %");
        cU.append(currentUvi);
        cU.text("UV Index: " + currentUvi);
        var currentImageHolder = $("<img>");
        cI.append(currentImageHolder);
        currentImageHolder.attr('src', currentIconUrl);
        currentContainer.append(cT, cW, cH, cU, cI);
    });


var savedUserInput = [];
savedUserInput.push(searchTerm.val());
searchTerm.text(" ");
localStorage.setItem(savedUserInput, JSON.stringify(savedUserInput));
var cityName = localStorage.getItem(savedUserInput);
var historyContainer= $(".historyContainer");
var searchHistory = $('<button>');
historyContainer.append(searchHistory);
JSON.parse(cityName);
searchHistory.text(savedUserInput);
})});