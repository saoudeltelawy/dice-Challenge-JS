// let player = null;
// player = prompt("Player Name: ");

// alert(`Welcome ${player} to the Game`);

// Variables
// let player1 = document.getElementById("player1");
// // player1.textContent = `${player}`;

let player2 = document.querySelectorAll(".dice p")[1];
// player2.textContent = "Test";

// let img2 = document.que("img");

function handleClick() {
  let diceArray = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  let firstRandomNumber = Math.floor(Math.random() * 6 + 1);
  let secondRandomNumber = Math.floor(Math.random() * 6 + 1);
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  //   console.log(img1.src);
  console.log(diceArray[0]);
  let sexy = (img1.src = "images/" + diceArray[firstRandomNumber]);
  //   console.log(test img);
  img2.src = "images/" + diceArray[secondRandomNumber];

  console.log(randomizedDiceNumber);
}

// ---- --- --- ---- WOWO---- --- ---
// let player = null;
// player = prompt("Player Name: ");

// alert(`Welcome ${player} to the Game`);

// Variables
// let player1 = document.getElementById("player1");
// // player1.textContent = `${player}`;

let player2 = document.querySelectorAll(".dice p")[1];
// player2.textContent = "Test";

function handleClick() {
  // Array Of Images

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
  } else if (firstRandomNumber > secondRandomNumber) {
    console.log("First Number is better");
  } else {
    console.log("Second Number is better");
  }
}
