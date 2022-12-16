let player = prompt("Player Name: ");
// alert(`Welcome to the Game ${player}`);

// Variables;
let player1 = document.getElementById("player1");
player1.textContent = `${player}`;
// let player2 = document.querySelectorAll(".dice p")[1];

function handleClick() {
  const audio = new Audio("sounds/dice-bouncing4.mp3");
  audio.play();

  let winnerBanner = document.querySelector("h3");
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");

  let firstRandomNumber = Math.floor(Math.random() * 6);
  let secondRandomNumber = Math.floor(Math.random() * 6);

  let diceArray = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  img1.src = "images/" + diceArray[firstRandomNumber];
  img2.src = "images/" + diceArray[secondRandomNumber];

  if (firstRandomNumber == secondRandomNumber) {
    winnerBanner.style.display = "inline-block";
    winnerBanner.innerHTML = "<b>It is a Tie... Play Again!</b>";
  } else if (firstRandomNumber > secondRandomNumber) {
    winnerBanner.style.display = "inline-block";
    winnerBanner.innerHTML = `<b>${player} Wins!</b>`;
  } else {
    winnerBanner.style.display = "inline-block";
    winnerBanner.innerHTML = `You Lose!!! <br> Wanna Play Again?`;
  }
}

(function () {
  setTimeout(function () {
    document.getElementById("img3").style.display = "none";
  }, 4000);
})();
