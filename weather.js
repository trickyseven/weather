$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    var daily = "Currently, the weather is: " + data.daily.summary;
    var hour = "The hourly forecast is: " + data.hourly.summary
    // var currently = "currently"
    // $("weather-report").html(currently.temperature);

    // $("weather-report").html()

    // var markup = "The weather report... " + "will be here when I finish my homework.";

$('.daily-weather').html(daily);
$('.hourly-weather').html(hour);
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
