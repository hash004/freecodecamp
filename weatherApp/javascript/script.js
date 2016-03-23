if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=3c764df6fcdd7a170df4a950b9f7a8f6", function(data){
    //$("#latlong").text(JSON.stringify(data));
    temperature = ((data.main.temp)-273.15).toFixed(1);
    city = data.name;
    $("#latlong").text("It's " + temperature + " in " + city);
  });


});
} else {
  /* geolocation IS NOT available */
}
