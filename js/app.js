var MAXIMUM_ANSWER = 100;
var answer;
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
  var guess = getGuess();
  var feedback = getFeedback(guess);
  alert(feedback);
}

function newGame() {
  resetGuessCount();
  generateAnswer();
}

function resetGuessCount() {
  setGuessCount(0);
}

function incrementGuessCount() {
  setGuessCount(guessCount+1);
}

function setGuessCount(guessCnt) {
  guessCount = guessCnt;
  $("span#count").text(guessCount);
}

function generateAnswer() {
  answer = Math.floor((Math.random() * MAXIMUM_ANSWER) + 1);
}

function getGuess() {
  return $("#userGuess").val();
}

function getFeedback(guess) {
  var diff = Math.abs(guess-answer);
  alert("answer: " + answer + ", diff: " + diff);
  var feedback;
  if (diff >= 50) feedback = "Ice Cold";
  else if (diff >= 30) feedback = "Cold";
  else if (diff >= 20) feedback = "Warm";
  else if (diff >= 10) feedback = "Hot";
  else if (diff >= 5) feedback = "Very Hot";
  else if (diff >= 1) feedback = "Burning Up!";
  else feedback = "Correct!";

  return feedback;
}
