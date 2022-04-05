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

// localStorage.setItem("cityName", searchTerm.val());
// localStorage.getItem(searchTerm.val()); this also pulls it
// console.log(localStorage.getItem("cityName"));
// var cityName = localStorage.getItem("cityName");
// console.log(cityName);
// var historyContainer = $(".historyContainer");
// var searchHistory = $('<button>');

// searchHistory.text(value);
// historyContainer.append(searchHistory);




// var recentSearches = []; // create an empty javascript array

// //this function is called using the search buttons "onclick"
// function searchFunction(data) {
    
//     recentSearches.push($('#textboxSearch').val()); // This line puts the value from the text box in an array
//     $('#textboxSearch').val(""); //  clear the text box after search
//     $('#searchHistory').text(""); //clear the seach history window then repopulate with the new array
    
//     // the function below loops through the array and adds each item in the array
//     // to the span element within the Search history arear
//     $.each(recentSearches, function (index, value) {
//         $('#searchHistory').append("<li class='historyItem'  onclick='addtotextbox("+index+")'>" + value + '</li>');
//     });
// }

// function addtotextbox(id)
// {
// $('#textboxSearch').val(recentSearches[id]);
// }