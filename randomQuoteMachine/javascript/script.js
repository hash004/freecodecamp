$(document).ready(function() {

getQuote();

$("#new-quote").on("click", function(){
  getQuote();
});

function getQuote(){
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      $('#title').text(data[0].title);
      $('.quote').html(data[0].content);
      $('#tweet').attr("href", "https://twitter.com/intent/tweet?text="+data[0].content);

      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $('#title').html('Source:' + post.custom_meta.Source);
      } else {
        $('#title').text('');
      }
    },
    cache: false
  });
}

});
