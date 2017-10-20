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
  $stamp.css({"background-color":$movieFinder.val()});
  var stampColor = $movieFinder.val();
  $body.on('mouseover', ".square", function(event) {
    $(event.target).css({"background":stampColor});
  })
  $movieFinder.val('')

});

for (var i = 0; i <= 1000; i++) {
  var $square = $("<div>",{ "class": "square"});
  $($body).append($square);
};
