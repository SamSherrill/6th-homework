// example query URL: api.openweathermap.org/data/2.5/weather?q=atlanta,ga,us&APPID=7d8227fc067bf4e67f91ead9ca584dc2

$(document).ready(function () {
    console.log("Document ready");
    $("#five-day-forecast").prepend(
        $("<h3>5 Day Forecast:</h3>" + "<div class='d-block'>")
    );

    $("#city-submit-button").on("click", function (event) {
                event.preventDefault();
                var cityName = $("#city-input").val();
                console.log(`cityName: ${cityName}`)
    });
});