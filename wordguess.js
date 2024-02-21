"use strict";
// Array of Random Words
const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; 
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");
var correctLetters = 0; // Track how many correct letters there are

function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  // Set current word to guess
  currentWord = words[Math.floor(Math.random() 
    * words.length)].toUpperCase(); 
  correctLetters = 0; // Reset correctLetters
  
  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
  }
  //start guessing word by user input
  // Starting game by clicking the start button
  inputBox.addEventListener("input", guessWord);
}
startButton.addEventListener("click", startGame); 

function guessWord(event){
 setTimeout(function(){
  const guessLetter=inputBox.value.toUpperCase();

  if (currentWord.includes(guessLetter) && !repeatedLetter(guessLetter)){
    const letterDivs=wordDiv.getElementsByClassName("wordBox-letter");
    for(let i=0; i<currentWord.length; i++){
      if(currentWord[i] === guessLetter){
        letterDivs[i].innerText=guessLetter;
        correctLetters++;
      }
    }
  }

  inputBox.value="";

  if (correctLetters === currentWord.length){
    inputBox.disabled=true;
    msgBox.innerHTML="You guessed the " + (currentWord) + " correctly!";
  }
 }, 300); 
}

function repeatedLetter(guessLetter){
  const letterDivs=wordDiv.getElementsByClassName("wordBox-letter");
  for(let i=0; i<currentWord.length; i++){
    if(letterDivs[i].innerText === guessLetter) {
      return true;
    }
  }
  return false;
}