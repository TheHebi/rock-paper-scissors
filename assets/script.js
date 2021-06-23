// rps psuedoe code

// TODO:capture player choice
let win = 0;
let loss = 0;
let tie = 0;
// create pop up prompt for user choice
// let userChoice = prompt("Choose r, p, or s");
// log info into var
// console.log("user choice " + userChoice);
// make usre user only choses valid choice EDGE
// TODO:random computer choice
// list possible choices
// let compPool = ["r", "p", "s"]; / started original pool as array, decided to use math.random() instead
// console.log(compPool);
// randomly select from list
// store in variable
let compChoice = Math.random();
console.log(compChoice);
if (compChoice > 0.34) {
  compChoice = "r";
} else if (compChoice < 0.67) {
  compChoice = "p";
} else {
  compChoice = "s";
}
console.log("computer choice " + compChoice);
// TODO:determine win/loss
// if/else statement
// if (userChoice === compChoice) {
//   alert("Game is a tie");
// } else if (userChoice === "s") {
//   if (compChoice === "r") {
//     alert("Computer wins, rock beats scissors");
//   } else {
//       correct++
//     alert("You win, scissors beats paper");
//   }
// } else if (userChoice === "r") {
//   if (compChoice === "s") {
//     alert("You win, rock beats scissors");
//   } else {
//     alert("Computer wins, paper beats rock");
//   }
// } else {
//   if (compChoice === "r") {
//     alert("You win, paper beats rock");
//   } else {
//     alert("Computer wins, scissors beats paper");
//   }
// }
// TODO:track wins and losses
// variables for wins/losses/ties
// show to user end of game
// TODO:play again?
// pop up with true/false options
// let replay = window.confirm("Play again");
// let replay = true
// if (replay) {

// merged original if/else statement into a do/while loop
  do {
    userChoice = prompt("Choose r, p, or s.\r\n This selction is case sensitive.");
    if(userChoice !== "r", "p", "s"){
        alert("You must choose r, p, or s.\r\n This selection is case sensitive.")
        userChoice = prompt("Choose r, p, or s.\r\n This selection is case sensitive.");
    }
    compChoice = Math.random();
    console.log(compChoice);
    if (compChoice > 0.34) {
      compChoice = "r";
    } else if (compChoice < 0.67) {
      compChoice = "p";
    } else {
      compChoice = "s";
    }
    if (userChoice === compChoice) {
        tie++
        alert("Game is a tie");
      } else if (userChoice === "s") {
        if (compChoice === "r") {
            loss++
          alert("Computer wins, rock beats scissors");
        } else {
            win++
          alert("You win, scissors beats paper");
        }
      } else if (userChoice === "r") {
        if (compChoice === "s") {
            win++
          alert("You win, rock beats scissors");
        } else {
            loss++
          alert("Computer wins, paper beats rock");
        }
      } else {
        if (compChoice === "r") {
            win++
          alert("You win, paper beats rock");
        } else {
            loss++
          alert("Computer wins, scissors beats paper");
        }
      }
      replay = confirm(`Stats: \r\n ${win} Wins \r\n ${loss} Losses \r\n ${tie} Ties \r\n Play again?`);
  } while (replay);
  
// }
//  if true loop, if false end
// recursive or while loop will work here
