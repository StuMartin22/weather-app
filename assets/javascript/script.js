var citySearch = "http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=5&appid=7395305ec624eec55c8c9f460f751d9d"
var urlData = document.location.search;
var searchTerm = $("#searchTerm");
var submitBtn = $("#submit");


submitBtn.on("click", function(event) {
    event.preventDefault();
    var city = searchTerm.val();
//     var newURL = citySearch.split("{city name}").join(city);
//     // console.log(newURL);
// fetch(newURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results)
//     });
var searchHistory = localStorage.setItem(city);
console.log(searchHistory);
var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('cityList', JSON.stringify(cityList));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('cityList');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
});
var cityList = {}
















// //ALL BELOW IS CODE TO FORMAT TO FETCH API AND ETC
// ////////////////////////////////////////////////////////////////
// var format = $("#format");

// submitBtn.on("click", function (event) {
//     event.preventDefault();
//     // alert("hello");
//     // console.log(searchTerm.val());
//     var userSearchTerm = searchTerm.val();
//     var userFormat = format.val();
//     document.location.href = "./page2.html?search=" + userSearchTerm + "&format=" + userFormat;
// });


// var mainEl = $("#main"); 
// //^ showing results for chicago in a div above a h3 that says that


// var urlData = document.location.search;
// var mainEl = $("#main");
// // console.log(urlData);

// var searchTerm = urlData.split("&")[0].split("=")[1];
// var format = urlData.split("&")[1].split("=")[1];

// var apiUrl = "https://www.loc.gov/collections/?fo=json&title=chicago&original_format=map";

// fetch(citySearch)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results[0]);
//         for (let i = 0; i < data.results.length; i++) {


//             var articleEl = $("<article class='p-10'>");
//             var titleEl = $("<h2>");
//             var pEl = $("<p>");
//             var descriptionEl = $("<p>");
//             var moreBtn = $("<button>");

//             titleEl.text(data.results[i].title);
//             articleEl.append(titleEl);

//             descriptionEl.text(data.results[i].description[0]);
//             articleEl.append(descriptionEl);

//             mainEl.append(articleEl);
//         }
//     });
    
// ////////////////////////////////////////////////////////////////
// //ALL AB