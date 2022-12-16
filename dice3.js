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
  let randomizedDiceNumber = Math.floor(Math.random() * 6 + 1);
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  //   console.log(img1.src);
  img1.src = "images/dice1.png";
  img2.src = "images/dice1.png";

  //   switch (randomizedDiceNumber) {
  //     case 1:
  //       img1.srcset = "images/dice1.png";
  //       break;
  //     case 2:
  //       img1.src = "images/dice1.png";
  //       break;
  //     case 3:
  //       player2.textContent = "Test";
  //       break;
  //     case 4:
  //       player2.textContent = "Test";

  //       break;
  //     case 5:
  //       player2.textContent = "Test";

  //       break;
  //     case 6:
  //       player2.textContent = "Test";

  //       break;
  //     default:
  //       break;
  //   }
  //   img1 = "images/dice2.png";
  console.log(randomizedDiceNumber);
}
