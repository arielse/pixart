var $brush = $(".brush");
var $button = $("#set-color");
var $colorField = $("#color-field");
var $body = $("body");
var $squareDiv = $(".square");


$button.on('click', function(event) {
  event.preventDefault();
  $brush.css({"background-color":$colorField.val()});
  $colorField.val('');
});


for (var i = 0; i <= 1000; i++) {
  var $square = $("<div>",{ "class": "square"});
  $($body).append($square);
};

$body.on('click', ".square", function(event) {
  $(event.target).css({"background":"green"});
})
