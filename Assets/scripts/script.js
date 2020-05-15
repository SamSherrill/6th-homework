// API KEY: in ENV file
// example query URL: api.openweathermap.org/data/2.5/weather?q=atlanta,ga,us&APPID=API_KEY

$(document).ready(function () {
    console.log("Document ready");
    $("#five-day-forecast").prepend(
        $("<h3>5 Day Forecast:</h3>" + "<div class='d-block'>")
    );
});