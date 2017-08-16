var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var online = [];
var offline = [];

function getStream(){
  streamers.forEach(function(streamer, i){
    var feed;
    function getUser(status){
      $.getJSON( "https://wind-bow.glitch.me/twitch-api/users/"+streamer, function(usersEP) {
        if(status=="Offline"){
          offline.push([
            usersEP.display_name,
            usersEP.logo,
            status
          ]);
        } else {
          online.push([
            usersEP.display_name,
            usersEP.logo,
            status
          ]);
        }
      });
    }
    $.getJSON( "https://wind-bow.glitch.me/twitch-api/streams/"+streamer, function(streamersEP) {
      if(streamersEP.stream===null){
      getUser("Offline");
      // feed = streamersEP.stream.channel.status;
      } else {
      getUser(streamersEP.stream.channel.status);
      }
    });
  });
}

function insertHTML(){
  var onlineHtml ="";
  online.forEach(function(onlineUsers){
    onlineHtml += '<tr class="success"><td>';
    onlineHtml += onlineUsers[1];
    onlineHtml += '</td><td>';
    onlineHtml += onlineUsers[0];
    onlineHtml += '</td><td>';
    onlineHtml += onlineUsers[2];
    onlineHtml += '</td></tr>';
    console.log("test");
  });
    $('table').html(onlineHtml);
    console.log(onlineHtml);

}
$( document ).ready(function() {
getStream();
insertHTML();
});
