$( document ).ready(function() {

  // Open navbarSide when button is clicked
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').addClass('reveal');
    $('.overlay').show();
  });

  // Close navbarSide when the outside of menu is clicked
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
  });

  // Open AccountnavbarSide when Sign In is clicked
  $('.sign-in').on('click', function() {
    $('#AccountnavbarSide').addClass('reveal');
    $('.overlay').show();
  });

  // Close AccountnavbarSide when the outside of menu is clicked
  $('.overlay').on('click', function(){
    $('#AccountnavbarSide').removeClass('reveal');
    $('.overlay').hide();
  });

  // JQueryUI date picker for event calendar
  $( function() {
     $( ".datepicker" ).datepicker();
   } );

   //Event calendar category selector
   $(".dropdown-menu li a").click(function(){
     $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
     $(this).parents(".dropdown").find('.btn').val($(this).data('value'));

   });

});
