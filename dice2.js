let player = null;
// player = prompt("Player Name: ");

// alert(`Welcome ${player} to the Game`);

let player1 = document.getElementById("player1");
player1.textContent = `${player}`;

let player2 = document.querySelectorAll(".dice p")[1];
// player2.textContent = "Test";

// console.log(randomizedDiceNumber);

// if (randomizedDiceNumber = 1
//     img == kaza

// // function handleClick() {
// console.log(randomizedDiceNumber);
// console.log(player2);
// player2.textContent = "Test Button";

// // }

function handleClick() {
  let randomizedDiceNumber = Math.floor(Math.random() * 6 + 1);

  switch (randomizedDiceNumber) {
    case 1:
      player2.textContent = "Test";
      break;
    case 2:
      player2.textContent = "Tes2";
      break;
    case 3:
      player2.textContent = "Test";

      break;
    case 4:
      player2.textContent = "Test";

      break;
    case 5:
      player2.textContent = "Test";

      break;
    case 6:
      player2.textContent = "Test";

      break;
    default:
      break;
  }

  console.log(randomizedDiceNumber);
}
