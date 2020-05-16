// example query URL: api.openweathermap.org/data/2.5/weather?q=atlanta,ga,us&APPID=7d8227fc067bf4e67f91ead9ca584dc2

$(document).ready(function () {
    console.log("Document ready");
    $("#five-day-forecast").prepend(
        // This will  be where we add the 5 day forecast cards
        $("")
    );

    // city-submit-button will be the button near the search bar in the top left
    $("#city-submit-button").on("click", function (event) {
                event.preventDefault();
                var cityName = $("#city-input").val();
                console.log(`cityName: ${cityName}`)
                // I'll ned to append or prepend small cards (or similar) of the
                // previously searched city names
    });

    // I'll need to add a function for the API call
    
    // Need function to add the current city's current weather details to the top right box
});