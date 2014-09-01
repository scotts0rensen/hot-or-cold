
$(document).ready(function(){

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /*--- New game ---*/
  $(".new").click( newGame );

  /*--- Handle guesses ---*/
  $( "form" ).submit( guessHandler );

  /*--- Start new game on page load ---*/
  newGame();
});

function guessHandler(event) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
}

function newGame() {
  alert( "Starting new game" );
}