$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    var markup = "The Weather Report is presented below"
    var currently = "Currently, the weather is: " + data.currently.summary + ". The current temperature is " + data.currently.temperature
    var day0 = "Today's forecast is: " + data.daily.data[0].summary + " The high will be " + data.daily.data[0].apparentTemperatureMax + " and the low will be " + data.daily.data[0].apparentTemperatureMin;
    var day1 = "Tomorrow's forecast is: " + data.daily.data[1].summary + " The high will be " + data.daily.data[1].apparentTemperatureMax + " and the low will be " + data.daily.data[1].apparentTemperatureMin;;
    var day2 = "The next day's forecast is: " + data.daily.data[2].summary + " The high will be " + data.daily.data[2].apparentTemperatureMax + " and the low will be " + data.daily.data[2  ].apparentTemperatureMin;;
    // var currently = "currently"
    // $("weather-report").html(currently.temperature);

    // $("weather-report").html()

    // var markup = "The weather report... " + "will be here when I finish my homework.";

$('.currently-weather').html(currently);
$('.day0-weather').html(day0);
$('.day1-weather').html(day1);
$('.day2-weather').html(day2);
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
