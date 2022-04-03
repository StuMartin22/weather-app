var citySearch = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
var urlData = document.location.search;
var searchTerm = $("#searchTerm");
var submitBtn = $("#submit");




//ALL BELOW IS CODE TO FORMAT TO FETCH API AND ETC
////////////////////////////////////////////////////////////////
var searchTerm = $("#search-term");
var format = $("#format");

submitBtn.on("click", function (event) {
    event.preventDefault();
    // alert("hello");
    // console.log(searchTerm.val());
    var userSearchTerm = searchTerm.val();
    var userFormat = format.val();
    document.location.href = "./page2.html?search=" + userSearchTerm + "&format=" + userFormat;
});


var mainEl = $("#main"); 
//^ showing results for chicago in a div above a h3 that says that


var format = urlData.split("&")[1].split("=")[1];
var apiUrl = "https://www.loc.gov/collections/?fo=json&title=chicago&original_format=map";
fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results[0]);
        for (let i = 0; i < data.results.length; i++) {
            var timeStamp = data.results[i].timestamp;
            var year = moment(timeStamp).format("YYYY");
            console.log(year)
            // console.log(timeStamp)
            var articleEl = $("<article class='p-10'>");
            var titleEl = $("<h2>");
            var pEl = $("<p>");
            var descriptionEl = $("<p>");
            var moreBtn = $("<button>");
            titleEl.text(data.results[i].title);
            articleEl.append(titleEl);
            pEl.text(year);
            articleEl.append(pEl);
            descriptionEl.text(data.results[i].description[0]);
            articleEl.append(descriptionEl);
            // moreBtn.text(data.result[i].url)
            // articleEl.append(moreBtn);
            mainEl.append(articleEl);
        }
    });
    
////////////////////////////////////////////////////////////////
//ALL ABOVE IS CODE TO FORMAT FOR SEARCHING API    