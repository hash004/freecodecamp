$(document).ready(function(){

  function getRickMorty(){
    $.getJSON("http://loremricksum.com/api/?paragraphs=1&quotes=1", function(data){
      $("h3").html('"' + data["data"] + '"');
      $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+data["data"]+"&hashtags=freecodecamp,rickandmorty,quotemachine");
    });
  }

  getRickMorty();

  $(".btn-success").on("click", function(){
    $("h3").html('<span class="glyphicon glyphicon-time"></span>');
    getRickMorty();
  });
});
