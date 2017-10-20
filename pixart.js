var $brush = $(".brush");
var $setColor = $("#set-color");
var $colorField = $("#color-field");
var $body = $("body");
var $squareDiv = $(".square");
var $stamp = $(".stamp");
var $brushBtn = $(".brush-btn");
var $stampBtn = $(".stamp-btn");
var $brushControls = $(".brush-controls");
var $stampControls = $(".stamp-controls");

$setColor.on('click', function(event) {
  event.preventDefault();
  $brush.css({"background-color":$colorField.val()});
  var brushColor = $colorField.val();
  $body.on('mouseover', ".square", function(event) {
    $(event.target).css({"background":brushColor});
  })
  $colorField.val('')

});

for (var i = 0; i <= 1000; i++) {
  var $square = $("<div>",{ "class": "square"});
  $($body).append($square);
};

$brushBtn.on('click', function() {
 $stampControls.classList.add("hide");
 $brushControls.classList.remove("hide");
});

$stampBtn.on('click', function() {
 $stampControls.classList.remove("hide");
 $brushControls.classList.add("hide");
})
