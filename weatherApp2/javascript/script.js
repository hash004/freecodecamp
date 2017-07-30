var celsius = 0;
var fahrenheit = 0;
var temp_min = 0;
var temp_max = 0;
function kelvinToCelsius(kelvin){
  return Math.round(kelvin-273.15);
}

function celsiusToFahrenheit(celsius){
  return celsius * 9 / 5 + 32;
}

  $.getJSON("http://ip-api.com/json", function(location){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon +
              "&appid=3c764df6fcdd7a170df4a950b9f7a8f6", function(weather){
      celsius = kelvinToCelsius(weather.main.temp);
      fahrenheit = (celsius*1.8)+32;
      temp_min = kelvinToCelsius(weather.main.temp_min);
      temp_max = kelvinToCelsius(weather.main.temp_max);
      sunrise = new Date(weather.sys.sunrise * 1000).getHours() + ":" + new Date(weather.sys.sunrise * 1000).getMinutes();
      sunset = new Date(weather.sys.sunset * 1000).getHours() + ":" + new Date(weather.sys.sunset * 1000).getMinutes();

      $(".temp").html("<span class='celsiusToFahrenheit celsius' >" + celsius + "°c</span>");
      $(".weather-icon").attr("src", "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
      $(".location").html(weather.name + ", " + weather.sys.country);
      $(".description").html(weather.weather[0].description);

      $(".temp-min-max").html("<i class='fa fa-level-down' aria-hidden='true'></i> Min: <span class='celsiusToFahrenheit celsius' >" +
                              temp_min + "°c</span> <br /><i class='fa fa-level-up' aria-hidden='true'></i> Max: <span class='celsiusToFahrenheit celsius' >" +
                              temp_max + "°c</span>");
      $(".humidity").html("<i class='fa fa-tint' aria-hidden='true'></i> Humidity: " + weather.main.humidity + "%");
      $(".sun").html("<i class='fa fa-sun-o' aria-hidden='true'></i> Sunrise: " + sunrise +
                     "<br /><i class='fa fa-moon-o' aria-hidden='true'></i> Sunset: " + sunset);

      setBackground(weather.weather[0].icon);
      // $(".col-lg-12").html(JSON.stringify(weather));
    });
  });

  $(document).ready(function(){
    $(document).on('click','.celsiusToFahrenheit',function(){
      if($('.celsiusToFahrenheit').hasClass("celsius")){
        $(".temp").html("<span class='celsiusToFahrenheit fahrenheit' >" + fahrenheit + "°f</span>");
        $(".temp-min-max").html("<i class='fa fa-level-down' aria-hidden='true'></i> Min: <span class='celsiusToFahrenheit fahrenheit' >" +
                                celsiusToFahrenheit(temp_min) + "°f</span> <br /><i class='fa fa-level-up' aria-hidden='true'></i> Max: <span class='celsiusToFahrenheit fahrenheit' >" +
                                celsiusToFahrenheit(temp_max) + "°f</span>");
      } else {
        $(".temp").html("<span class='celsiusToFahrenheit celsius' >" + celsius + "°c</span>");
        $(".temp-min-max").html("<i class='fa fa-level-down' aria-hidden='true'></i> Min: <span class='celsiusToFahrenheit celsius' >" +
                                temp_min + "°c</span> <br /><i class='fa fa-level-up' aria-hidden='true'></i> Max: <span class='celsiusToFahrenheit celsius' >" +
                                temp_max + "°c</span>");
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
