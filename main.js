//global variabels
let header = document.querySelector("h1");
let img1 = document.getElementById("img-left");
let img2 = document.getElementById("img-right");
let values = ["rock", "paper", "scissors"];
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let resetbtns = document.querySelectorAll(".reset-btn");
let score = document.querySelector(".score");
let howTobtn = document.getElementById("rules");

// Check if the page has been loaded before by looking for data saved in sessionStorage
if (sessionStorage.getItem("firstLoad")) {
  if (
    sessionStorage.getItem("p1Score") == "11" ||
    sessionStorage.getItem("p2Score") === "11"
  ) {
    removeClassHidden();
  } else {
    showRandomImagesInGame();
    playGame();
  }
}
//if it loading for the first time, save "firstLoad" in sessionStorage
else {
  sessionStorage.setItem("firstLoad", true);
  sessionStorage.setItem("p1Score", 0);
  sessionStorage.setItem("p2Score", 0);
}

//resets page to first load when a resetbutton is clicked
resetbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sessionStorage.clear();
    location.reload();
  });
});

//show description of how and why to play the gam
howTobtn.addEventListener("click", () => {
  alert(
    "ROCK PAPER SCISSORS\nThis is a classic game that is sometimes played for fun and other times to decide a dispute. Like deciding who will have to do the dishes.\nThis page gives you a chance to settle thing online.\n\nRock breaks Scissors, Scissors cuts Paper and Paper swallos Rock.\nEach round is decided by who has the strongest hand and here the winner is the one who first reaches 11 points.\n\n Each round is played by refreshing the page. Good Luck! "
  );
});

//randomizes the pictures
function showRandomImagesInGame() {
  let randImgLeft = `images/${values[rand1]}.png`;
  let randImgRight = `images/${values[rand2]}.png`;

  img1.setAttribute("src", randImgLeft);
  img1.setAttribute("alt", `Illustration of handsymbol for ${randImgLeft}`);
  img2.setAttribute("src", randImgRight);
  img2.setAttribute("alt", `Illustration of handsymbol for ${randImgRight}`);
}

//decides winner per round
function playGame() {
  if (
    (rand1 == 0 && rand2 == 2) ||
    (rand1 == 1 && rand2 == 0) ||
    (rand1 == 2 && rand2 == 1)
  ) {
    header.textContent = "Player One Wins!";
    updateScorePlayer1();
  } else if (
    (rand1 == 2 && rand2 == 0) ||
    (rand1 == 0 && rand2 == 1) ||
    (rand1 == 1 && rand2 == 2)
  ) {
    header.textContent = "Player Two Wins!";
    updateScorePlayer2();
  } else {
    checkForWinner();
    header.textContent = "Draw!";
    score.textContent = `${Number(
      sessionStorage.getItem("p1Score")
    )} - ${Number(sessionStorage.getItem("p2Score"))} `;
  }
}

//updates score when player one wins
function updateScorePlayer1() {
  var newScore = Number(sessionStorage.getItem("p1Score")) + 1;
  checkForWinner(newScore, "player1");
  sessionStorage.setItem("p1Score", newScore);
  score.textContent = `${newScore} - ${Number(
    sessionStorage.getItem("p2Score")
  )}`;
}
//upadates score when player two wins
function updateScorePlayer2() {
  var newScore = Number(sessionStorage.getItem("p2Score")) + 1;
  checkForWinner(newScore, "player2");
  sessionStorage.setItem("p2Score", newScore);
  score.textContent = `${Number(
    sessionStorage.getItem("p1Score")
  )} - ${newScore}`;
}
//declares game over and shows who won
function checkForWinner(currentScore, player) {
  if (currentScore >= 11 && player === "player1") {
    removeClassHidden();
    document.querySelector(".winner").textContent =
      "Congratulations Player 1 You won the game!";
  } else if (currentScore >= 11 && player === "player2") {
    removeClassHidden();
    document.querySelector(".winner").textContent =
      "Congratulations Player 2 You won the game!";
  }
}
//hides original game screen behind end screen
function removeClassHidden() {
  let hiddenElements = document.querySelectorAll(".hidden");
  if (hiddenElements.length == 0) {
  } else {
    Array.from(hiddenElements).forEach((element) => {
      element.classList.remove("hidden");
      document.getElementById("");
    });
  }
}
