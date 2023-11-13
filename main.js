const RockScissorsPaper = ["rock", "scissors", "paper"];

const images = {
  rock: "./images/rock.jpg",
  scissors: "./images/scissors.jpg",
  paper: "./images/paper.jpg",
};

const userRock = document.querySelector("#rock");
const userPaper = document.querySelector("#paper");
const userScissors = document.querySelector("#scissors");

let userScore = 0;
let computerScore = 0;
let shackImage = setInterval(showImage, 200);

window.onload = function () {
  document
    .getElementsByClassName("group-buttons")[0]
    .addEventListener("click", (e) => {
      if (e.target.id === "rock") {
        game("rock");
      } else if (e.target.id === "scissors") {
        game("scissors");
      } else if (e.target.id === "paper") {
        game("paper");
      }
    });

  document.getElementById("play-again").addEventListener("click", closeModal);
  document.getElementById("quit").addEventListener("click", reset);
};

function GetRandomNumber() {
  return Math.floor(Math.random() * RockScissorsPaper.length);
}

function GetRandomImage() {
  return images[RockScissorsPaper[GetRandomNumber()]];
}

function reset() {
  userScore = 0;
  computerScore = 0;
  document.querySelector("#user-score").innerText = userScore;
  document.querySelector("#computer-score").innerText = computerScore;
  closeModal();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  shackImage = setInterval(showImage, 200);
}

function showImage() {
  let userImage = GetRandomImage();
  let randomImage = GetRandomImage();
  document.getElementById("user-image").src = userImage;
  document.getElementById("computer-image").src = randomImage;
}

function game(userChoice) {
  let computerChoice = RockScissorsPaper[GetRandomNumber()];

  clearInterval(shackImage);

  document.getElementById("user-image").src = images[userChoice];
  document.getElementById("computer-image").src = images[computerChoice];

  if (userChoice === computerChoice) {
    document.getElementById("icon").innerText = "🤔";
    document.getElementById("comment").innerText = "You Draw";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    document.getElementById("icon").innerText = "😎";
    document.getElementById("comment").innerText = "You Win";
    userScore++;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    document.getElementById("icon").innerText = "😎";
    document.getElementById("comment").innerText = "You Win";
    userScore++;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    document.getElementById("icon").innerText = "😎";
    document.getElementById("comment").innerText = "You Win";
    userScore++;
  } else {
    document.getElementById("icon").innerText = "😢";
    document.getElementById("comment").innerText = "You Lose";
    computerScore++;
  }

  document.getElementById("modal").style.display = "flex";

  document.querySelector("#user-score").innerText = userScore;
  document.querySelector("#computer-score").innerText = computerScore;
}
