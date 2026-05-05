// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

//Get random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//When type in the correct word
function checkInput() {
  if (text.value === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    text.value = "";
  }
}

//Game over
function gameOver() {
    endgameEl.style.display = "flex"; 
};

//Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time;

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

settingsBtn.addEventListener("click", function() {
  settings.classList.toggle("hide");
});

settingsForm.addEventListener("change", function(e) {
  if (e.target.value === "hard") {
      time = 10;
    } else if (e.target.value === "medium") {
      time = 15;
    } else {
      time = 20;
    }
});

const timeInterval = setInterval(updateTime, 1000);
addWordToDOM();
text.addEventListener("input", checkInput);