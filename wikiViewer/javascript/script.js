$( document ).ready(function() {
  $(".form-control").on( "keypress", function(e){
    $('.list-group').html(html);


    //if the keypressed is an enter key
    if(e.which == 13) {
      if(!($(".results").hasClass("hidden"))){
        $(".results").fadeOut(500);
      }

      var search = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + $(".form-control").val() + "&format=json&origin=*";
      var html = "";
      $.getJSON(search, function(data){
        data.query.search.forEach(function(result){
          html+= '<a class="list-group-item" href="https://en.wikipedia.org/wiki/' + result.title + '">';
          html+= '<h4 class="list-group-item-heading">' + result.title + '</h4>';
          html+= '<p class="list-group-item-text">' + result.snippet + '...</p></a>';
        });
        $('.list-group').html(html);
        //console.log(html);
      });
      $(".results").fadeIn(500).removeClass('hidden');
    }
  });
});
