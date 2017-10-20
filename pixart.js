var $brush = $(".brush");
var $stamp = $(".stamp");
var $setColor = $("#set-color");
var $setStamp = $("#set-stamp");
var $colorField = $("#color-field");
var $movieFinder = $("#movie-finder");
var $body = $("body");
var $squareDiv = $(".square");


$setColor.on('click', function(event) {
  event.preventDefault();
  $brush.css({"background-color":$colorField.val()});
  var brushColor = $colorField.val();
  $body.on('mouseover', ".square", function(event) {
    $(event.target).css({"background":brushColor});
  })
  $colorField.val('')
});

$setStamp.on('click', function(event) {
  event.preventDefault();
  var getMovie = {
    method: 'get',
    url: 'http://www.omdbapi.com/',
    data: { apikey: '2f6435d9', t: $movieFinder.val()}
  }

  var addPoster = function(result) {
    $stamp.css({"background-image": result.Poster });
    var stampImg = "url(" + result.Poster + ")";
    $body.on('mouseover', ".square", function(event) {
      $(event.target).css({"background-image": stampImg});

    })
    $movieFinder.val('')
  }
  $.ajax(getMovie).done(addPoster);

});

for (var i = 0; i <= 1000; i++) {
  var $square = $("<div>",{ "class": "square"});
  $($body).append($square);
};
