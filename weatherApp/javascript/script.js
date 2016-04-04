var fahrenheit = 0;
var celsius = 0;

if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=3c764df6fcdd7a170df4a950b9f7a8f6", function(data){

      temperature = celsius = ((data.main.temp)-273.15).toFixed(1);
      fahrenheit = (temperature*1.8)+32;
      city = data.name;
      country = data.sys.country;
      weather = data.weather[0];
      sunrise = new Date(data.sys.sunrise * 1000);
      sunset = new Date(data.sys.sunset * 1000);
      humidity = data.main.humidity;
      wind = data.wind;

      $("#location").text(city + ", " + country);
      $("#temp").html(temperature + " <i class='wi wi-celsius'></i>");
      $("#weather").html(weather.main + " <br /><i class='wi wi-owm-" + weather.id + "'></i>");
      $("#sunrise").html(sunrise.getHours() + ":" + sunrise.getMinutes() + " <i class='wi wi-sunrise'></i> ");
      $("#sunset").html(sunset.getHours() + ":" + sunset.getMinutes() + " <i class='wi wi-sunset'></i> ");
      $("#wind").html(humidity + " <i class='wi wi-humidity'></i><br /> " +
                      wind.speed + " <i class='wi wi-wind-beaufort-" + Math.floor(wind.speed) + "'></i><br /> " +
                      wind.deg + " <i class='wi wi-wind from-" + wind.deg + "-deg'></i>");

      setBackground(weather.icon);

      console.log("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=3c764df6fcdd7a170df4a950b9f7a8f6");
    });
  });
} else {
  /* geolocation IS NOT available */
  $("#latlong").text("Please allow the website to use your location to work out where you are.");
}

$( document ).ready(function() {
  $("#temp").click(function(){
    if($(this).hasClass("fahrenheit")){
      $("#temp").html(celsius + " <i class='wi wi-celsius'></i>");
      $(this).removeClass("fahrenheit");
    } else {
      $(this).html(fahrenheit + " <i class='wi wi-fahrenheit'></i>");
      $(this).addClass("fahrenheit");
    }
  });
});

function setBackground(icon){
  switch(icon){
    case "01d":
    case "01n":
      $("body").addClass("sunny");
      break;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      $("body").addClass("cloud");
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      $("body").addClass("rain");
      break;
    case "11d":
    case "11n":
      $("body").addClass("thunder");
      break;
    case "13d":
    case "13n":
      $("body").addClass("snow");
      break;
    case "50d":
    case "50n":
      $("body").addClass("mist");
      break;
  }
}
