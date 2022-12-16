let player = null;
player = prompt("Player Name: ");

alert(`Welcome ${player} to the Game`);

// Variables;
let player1 = document.getElementById("player1");
player1.textContent = `${player}`;

let player2 = document.querySelectorAll(".dice p")[1];
// player2.textContent = "Test";

function handleClick() {
  // Array Of Images
  let winnerBanner = document.querySelector("h3");

  let diceArray = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  let firstRandomNumber = Math.floor(Math.random() * 6);
  let secondRandomNumber = Math.floor(Math.random() * 6);

  console.log(firstRandomNumber, "---", secondRandomNumber);
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  //   console.log(img1.src);
  console.log(diceArray[0]);
  img1.src = "images/" + diceArray[firstRandomNumber];
  img2.src = "images/" + diceArray[secondRandomNumber];

  if (firstRandomNumber == secondRandomNumber) {
    console.log("Tie ");
    winnerBanner.style.display = "inline-block";
    winnerBanner.innerHTML = "<b>It is a Tie... Play Again!</b>";
  } else if (firstRandomNumber > secondRandomNumber) {
    // console.log("First Number is better");
    winnerBanner.style.display = "inline-block";
    winnerBanner.innerHTML = `<b>${player} Wins!</b>`;
  } else {
    winnerBanner.innerHTML = `You Lose!!! <br> Wanna Play Again?`;
  }
}
