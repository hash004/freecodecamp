var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


function getStream(){
  streamers.forEach(function(streamer, i){
    var feed;
    function getUser(status){
      $.getJSON( "https://wind-bow.glitch.me/twitch-api/users/"+streamer, function(usersEP) {
        if(usersEP.logo==null){
          usersEP.logo = "https://unsplash.it/100/100/?random";
        }
        if(status=="Offline"){
          var offlineHtml ="";
          offlineHtml += '<tr class="danger"><td>';
          offlineHtml += '<img class="img-responsive img-circle" src="' + usersEP.logo + '" />';
          offlineHtml += '</td><td class="display-name"><a href="https://www.twitch.tv/' + usersEP.name + '">';
          offlineHtml += usersEP.display_name;
          offlineHtml += '</a></td><td>';
          offlineHtml += status;
          offlineHtml += '</td></tr>';
          $('table').append(offlineHtml);
        } else {
          var onlineHtml ="";
          onlineHtml += '<tr class="success"><td>';
          onlineHtml += '<img class="img-responsive img-circle" src="' + usersEP.logo + '" />';
          onlineHtml += '</td><td class="display-name"><a href="https://www.twitch.tv/' + usersEP.name + '">';
          onlineHtml += usersEP.display_name;
          onlineHtml += '</td><td>';
          onlineHtml += status;
          onlineHtml += '</td></tr>';
          $('table').prepend(onlineHtml);
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
$( document ).ready(function() {
  $(".all").click(function(){
    $(".all").addClass("active");
    $(".online, .offline, .success, .danger").removeClass('active hidden');
  });
  $(".online").click(function(){
    $(".online").addClass("active");
    $(".all, .offline, .success, .danger").removeClass('active hidden');
    $(".danger").addClass('hidden');
  });
  $(".offline").click(function(){
    $(".offline").addClass("active");
    $(".all, .online, .success, .danger").removeClass('active hidden');
    $(".success").addClass('hidden');

  });
getStream();
});
