var $brush = $(".brush");
var $button = $("#set-color");
var $colorField = $("#color-field");

$button.on('click', function(event) {
  event.preventDefault();
  $brush.css({"background-color":$colorField.val()})
  $colorField.val('');
})
