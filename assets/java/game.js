//Variables
var words = ["sofles", "wildstyle", "graffiti", "subway", "throwie", "burner", "areosol"];
var guessed = [];
var answerArray = [];
var selectedWord = "";
var remainingLetters = 0;

//Game stats
var wins = 0;
var losses = 0;
var guessLeft = 10;

//Functions

function display() {
    document.getElementById('wordLine').innerText = answerArray.join(" ");
    document.getElementById('wins').innerText = 'Wins: ' + wins;
    document.getElementById('losses').innerText = 'Losses: ' + losses;
    document.getElementById('guessLeft').innerText = 'Guesses Left: ' + guessLeft;
    document.getElementById('guessed').innerText = guessed;
}

function startGame() {
    guessLeft = 10;
    guessed = [];
    answerArray = [];
    selectedWord = words[Math.floor(Math.random() * words.length)];
    remainingLetters = selectedWord.length;
    console.log(selectedWord);
    console.log(remainingLetters);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArray[i] = '_';
    }
    display();
}

function checkLetter(userGuess) {
    var goodLetter = false;

    for (j = 0; j < selectedWord.length; j++) {
        if (selectedWord[j] === userGuess) {
            goodLetter = true;
        }
    }

    if (goodLetter) {
        for (i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === userGuess) {
                answerArray[i] = userGuess;
                remainingLetters--;
                console.log(remainingLetters);
                display();
            }
        }
    }
    else {
        guessLeft--;
    }

    console.log("guessed array: " + guessed);
    display();
}

function checkRound() {
    if (guessLeft === 0) {
        losses++;
        display();
        alert("You weren't able to guess the word in time! :(");
        loseScreen();
        startGame();
    }
    else if (remainingLetters === 0) {
        wins++;
        display();
        alert("NICE! You guessed the word!");
        setTimeout(function () { startGame(); }, 2000);
    }
}

document.onkeypress = function (event) {
    let userGuess = event.key;


    for (i = 0; i < selectedWord.length; i++) {
        if (userGuess === guessed[i]) {
            alert("You've already tried that letter!")
            return;
        }
    }
    guessed.push(userGuess);
    checkLetter(userGuess);
    checkRound();
}

startGame();