//Variables
var words =["sofles", "wildstyle", "graffiti", "subway"];
var wins = 0;
var guessLeft = 10;
var guessed = [];
var answerArray = [];


var winsTab = document.getElementById('wins');
var guessesTab = document.getElementById('guessLeft');
var guessedTab = document.getElementById('guessed');
var wordLineTab = document.getElementById('wordLine');

// Displays
function display() {
    wordLineTab.innerText = answerArray.join(" ");
    winsTab.innerText = 'Wins: ' + wins;
    guessesTab.innerText = 'Guesses Left: ' + guessLeft;
    guessedTab.innerText = guessed;
}


//Functions
var selectedWord = words[Math.floor(Math.random() * words.length)];


var remainingLetters = selectedWord.length;
reset ();
function reset() {
    guessLeft = 10;
    guessesTab.innerText = 'Guesses Left: ' + guessLeft;
    guessed = [];
    guessedTab.innerText = 'You Guessed: ' + guessed;
    selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArray[i] = '_';
    }
    display();
}



document.onkeypress = function(event) {
    let userGuess = event.key;

    for (var j = 0; j < selectedWord.length; j++) {
        if (selectedWord[j] === userGuess) {
          answerArray[j] = userGuess; 
          --remainingLetters;
            display();
        }
    }

    if (userGuess === answerArray) {
        --remainingLetters;
    }

    else {
        guessed.push(userGuess);
        guessLeft--;
        display();
    }

    

}




//If else statments and loops
