$(document).ready(function() {
  $('button').on('click', function(event) {
    event.preventDefault();
    $('.unit').remove();
   

  });

  $('#submit').on('click', function(event) {
    event.preventDefault();
    $('.unit').remove();
    var input = $('#size').val();
    if (input > 100) {
      $('p').remove()
      $('body').append("<p>size is too great!</p>")
    } else {
      $('p').remove();

      for (var x = 0; x < (input * input); x++) {

        var unit = $("<div class='unit'></div>");
        unit.appendTo('#container');

      }

    }
    $('.unit').height((480 / input) - 2)
    $('.unit').width((480 / input) - 2)
    $('.unit').hover(function() {
      $(this).css("background-color", "black");
    });
  });

});
