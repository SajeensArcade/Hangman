'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author: Sajeen Srikumar
 * Description:
 * 
 */

function refreshPage() {
  window.location.reload()
}
let wrong_guesses = 0
let hidden_word = ""
let random = Math.floor(Math.random() * 8)
let movie_pick = getTitle(random).toLowerCase();
$("Movies").hidden = true
$("Disney_Movies").hidden = true
$("MLB_Teams").hidden = true
$("NHL_Teams").hidden = true
$("NBA_Teams").hidden = true
$("NFL_Teams").hidden = true
$("5_Letter").hidden = true
$("Beautiful_Word").hidden = true
$("Nba_Players").hidden = true

if (random == 0)
  $("Movies").hidden = false
else if (random == 1)
  $("Disney_Movies").hidden = false
else if (random == 2)
  $("MLB_Teams").hidden = false
else if (random == 3)
  $("NHL_Teams").hidden = false
else if (random == 4)
  $("NBA_Teams").hidden = false
else if (random == 5)
  $("NFL_Teams").hidden = false
else if (random == 6)
  $("5_Letter").hidden = false
else if (random == 7)
  $("Beautiful_Word").hidden = false
else if (random == 8) {
  $("Nba_Players").hidden = false
}
let users_answers = ""
let user_guess = []
let winner = false;
let display = ""
let x = 0

$("Play_Again").hidden = true


let user_input = $("Letter").addEventListener("keypress", Enter_Key)

$("begin").addEventListener("click", Hidden_Buttons);

// Hides and Unhides the Begin Button, Category:Movies and un hides the text box and enter button 

function Hidden_Buttons() {
  $("Instructions").hidden = true;
  $("begin").hidden = true;
  console.log(movie_pick)
  $("Letter").hidden = false;
  $("Enter_Button").hidden = false;
  $("buttonthree").hidden = true
 
}

// When begins clicked game function runs and makes as much letters in the movies name to underlines. 
function game() {
  $("underline").addEventListener("begin", game)
  wrong_guesses = 0
  for (let x = 0; x < movie_pick.length; x++) {
    if (movie_pick[x] == " ") {
      hidden_word += " "
    } else
      hidden_word += "_"
  }
  document.getElementById("underline").innerHTML = "" + hidden_word
}
// User guesses letter if letter is right it will make use different array for each letter and will un hide the underline wit the letter. 
function Enter_Key(event) {
  let letter = ""
  if (event.key === "Enter") {
    letter = $("Letter").value
    let letter_found = false;
    for (let counter = 0; counter < movie_pick.length; counter++) {
      if (movie_pick[counter] == letter) {
        console.log(letter)
        console.log(user_guess)
        // Split changes a string into a array for example "Hello", each letter is put into a different array so (H. E, L , L, O)
        hidden_word = hidden_word.split("");
        hidden_word[counter] = letter;
        let new_word = "";
        for (let x = 0; x < hidden_word.length; x++) {
          new_word += hidden_word[x];
          new_word += display;
        }
        hidden_word = new_word;
        console.log(hidden_word);
        letter_found = true;
      }
    }
    // Shows the user if they get the letter wrong the head is put on and so for
    if (letter_found == false) {
      wrong_guesses++;
    }
    if (wrong_guesses == 1) {
      $("hangman").src = "images/headofhang.png"
    }
    else if (wrong_guesses == 2) {
      $("hangman").src = "images/headchest.png"
    }
    else if (wrong_guesses == 3) {
      $("hangman").src = "images/headchestleftarm.png"
    }
    else if (wrong_guesses == 4) {
      $("hangman").src = "images/headchestarms.png"
    }
    else if (wrong_guesses == 5) {
      $("hangman").src = "images/fullbodywithleftleg.png"
    }
    else if (wrong_guesses == 6) {
      $("hangman").src = "images/fullbody.png"
      $("Movies").hidden = true
      $("Disney_Movies").hidden = true
      $("MLB_Teams").hidden = true
      $("NHL_Teams").hidden = true
      $("NBA_Teams").hidden = true
      $("NFL_Teams").hidden = true
      $("5_Letter").hidden = true
      $("Beautiful_Word").hidden = true
      $("Nba_Players").hidden = true
      $("YouLose").innerHTML = ("You Lost!")
      $("hangman").hidden = true
      $("Letter").hidden = true
      $("title").hidden = true
      $("underline").hidden = true
      $("Enter_Button").hidden = true
      $("Play_Again").hidden = false
      $("buttonthree").hidden = true
    }
    if (movie_pick == hidden_word) {
      $("YouLose").innerHTML = ("You Win!")
      $("Movies").hidden = true
      $("Disney_Movies").hidden = true
      $("MLB_Teams").hidden = true
      $("NHL_Teams").hidden = true
      $("NBA_Teams").hidden = true
      $("NFL_Teams").hidden = true
      $("5_Letter").hidden = true
      $("Beautiful_Word").hidden = true
      $("Nba_Players").hidden = true
      $("hangman").hidden = true
      $("Letter").hidden = true
      $("title").hidden = true
      $("underline").hidden = true
      $("Enter_Button").hidden = true
      $("Play_Again").hidden = false
      $("trophy").hidden = false
      $("buttonthree").hidden = true
    }
    document.getElementById("underline").innerHTML = "" + hidden_word
    // document.getElementById("guessedLetter").innerHTML = "Guessed Letter: " + user_guess.join(", ")
  }
}

function $(id) {
  return document.getElementById(id)
}
