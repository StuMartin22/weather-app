var citySearch = "http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid=7395305ec624eec55c8c9f460f751d9d"
var urlData = document.location.search;
var searchTerm = $("#searchTerm");
var submitBtn = $("#submit");


submitBtn.on("click", function(event) {
    event.preventDefault();
    var newURL = citySearch.split("{city name}").join(searchTerm.val());
    console.log(newURL);
// fetch(newURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results)
//     });
localStorage.setItem("cityName", searchTerm.val());
// localStorage.getItem(searchTerm.val()); this also pulls it
console.log(localStorage.getItem("cityName"));
});
var historyContainer = $("#historyBtnList");
var cityName = localStorage.getItem("cityName");
var cityHistory = $(<li><button></button></li>);
historyContainer.append(cityHistory);



