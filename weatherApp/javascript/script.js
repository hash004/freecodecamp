if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
  $("#latlong").text("Lat: " + position.coords.latitude + " Long: " + position.coords.longitude);
});
} else {
  /* geolocation IS NOT available */
}
