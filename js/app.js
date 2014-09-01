
var guessCount = 0;

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
  event.preventDefault();
  incrementGuessCount();
}

function newGame() {
  resetGuessCount();
}

function resetGuessCount() {
  guessCount = 0;
  $("span#count").text(guessCount);
}

function incrementGuessCount() {
  guessCount++;
  $("span#count").text(guessCount);
}