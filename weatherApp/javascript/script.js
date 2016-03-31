if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=3c764df6fcdd7a170df4a950b9f7a8f6", function(data){
      //$("#latlong").text(JSON.stringify(data));
      temperature = ((data.main.temp)-273.15).toFixed(1);
      city = data.name;
      country = data.sys.country;
      weather = data.weather[0];
      sunrise = new Date(data.sys.sunrise * 1000);
      sunset = new Date(data.sys.sunset * 1000);

      $("#latlong").text("It's " + temperature + " in " + city + ", " + country);
      $("#weather").text("Weather: " + weather.main);
      $("#sun").text("Sunrise: " + sunrise.toLocaleString() + " Sunset: " + sunset.toLocaleString());

      console.log("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=3c764df6fcdd7a170df4a950b9f7a8f6");
    });
  });
} else {
  /* geolocation IS NOT available */
  $("#latlong").text("Please allow the website to use your location to work out where you are.");
}
