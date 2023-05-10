let timeLeft = 10;
let timerInterval;
let score = 0;
let highScore = 0;
let correctAnswer = 0;
let person = null;
//: 1 (by Aki)
function setHighScore(){
    if (score > highScore) {
        highScore = score;
        let person = prompt("You got a high score of " + highScore + "! Please enter your name:", "Enter your name");
        let result = +highScore+ " (by " +person+ ")";
        console.log(person)
        console.log(result)
        localStorage.setItem("highScore", result);
        document.getElementById("highScore").innerHTML = "High Score: " + highScore + " (by " + person + ")";
      } else {
        document.getElementById("highScore").innerHTML = "High Score: " + highScore;
      }
}
//when the page loads, browser fetch the saved high score from browser memory
window.onload = function () {
  let scoreFromBrowser = localStorage.getItem("highScore");
  if (scoreFromBrowser !== undefined) highScore = scoreFromBrowser;
  document.getElementById("highScore").innerHTML = "High Score: " + highScore;
  console.log(scoreFromBrowser)
};

function nextQuestion() {
  let operationDiv = document.getElementById("operation");
  let firstNum = Math.ceil(Math.random() * 12);
  let secondNum = Math.ceil(Math.random() * 12);
  correctAnswer = firstNum * secondNum;
  operationDiv.innerHTML = firstNum + "*" + secondNum;

  let wrongAnswer1 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer2 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer3 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer4 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);

  document.getElementById("btn1").innerHTML = wrongAnswer1;
  document.getElementById("btn2").innerHTML = wrongAnswer2;
  document.getElementById("btn3").innerHTML = wrongAnswer3;
  document.getElementById("btn4").innerHTML = wrongAnswer4;

  let correctAnswerIndex = Math.floor(Math.random() * 4) + 1;
  let correctAnswerID = "btn" + correctAnswerIndex;
  document.getElementById(correctAnswerID).innerHTML = correctAnswer;
}

function checkAnswer(buttonIndex) {
  let answer = document.getElementById("btn" + buttonIndex).innerHTML;
  if (correctAnswer == answer) score += 1;
  document.getElementById("currentScore").innerHTML = "Current Score: " + score;

  

  nextQuestion();
}
//when START button is pressed, hide it and start the game
function startGame() {
  document.getElementById("startbtn").hidden = true;

  nextQuestion();

  //timedisplay shows remaining time, and when time reaches zero it makes button disabled
  let timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.hidden = false;
  timerInterval = setInterval(function () {
    timeLeft -= 1;
    timeDisplay.innerHTML = "Time left: " + timeLeft;
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = true;
      document.getElementById("btn3").disabled = true;
      document.getElementById("btn4").disabled = true;
      console.log("hit2");
      setHighScore();
      console.log("testi");

    }
  }, 1000);
}
