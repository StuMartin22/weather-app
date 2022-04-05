var citySearch = "http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid=7395305ec624eec55c8c9f460f751d9d"
var urlData = document.location.search;
var searchTerm = $("#searchTerm");
var submitBtn = $("#submit");


submitBtn.on("click", function(event) {
    // event.preventDefault();
    // var newURL = citySearch.split("{city name}").join(searchTerm.val());
    // console.log(newURL);
// fetch(newURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results)
//     });
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
});