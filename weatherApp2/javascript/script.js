function kelvinToCelsius(kelvin){
  return Math.round(kelvin-273.15);
}

function celsiusToFahrenheit(celsius){
  return celsius * 9 / 5 + 32;
}

  $.getJSON("http://ip-api.com/json", function(location){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon + "&appid=3c764df6fcdd7a170df4a950b9f7a8f6", function(weather){
      var temp = kelvinToCelsius(weather.main.temp);
      var temp_min = kelvinToCelsius(weather.main.temp_min);
      var temp_max = kelvinToCelsius(weather.main.temp_max);
      sunrise = new Date(weather.sys.sunrise * 1000).getHours() + ":" + new Date(weather.sys.sunrise * 1000).getMinutes();
      sunset = new Date(weather.sys.sunset * 1000).getHours() + ":" + new Date(weather.sys.sunset * 1000).getMinutes();

      $(".temp").html(temp + "°c");
      $(".weather-icon").attr("src", "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
      $(".location").html(weather.name + ", " + weather.sys.country);
      $(".description").html(weather.weather[0].description);

      $(".temp-min-max").html("Min: " + temp_min + "°c <br />" + "Max: " + temp_max + "°c");
      $(".humidity").html("Humidity: " + weather.main.humidity + "%");
      $(".sun").html("Sunrise: " + sunrise + "<br />Sunset: " + sunset);

      // $(".col-lg-12").html(JSON.stringify(weather));
    });
  });
