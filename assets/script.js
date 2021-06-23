// rps psuedoe code

// TODO:capture player choice
    // create pop up prompt for user choice
    let userChoice = prompt("Choose r, p, or s");
    // log info into var
    console.log(userChoice);
    // make usre user only choses valid choice EDGE
// TODO:random computer choice
    // list possible choices
    let compPool = ["r", "p", "s"];
    console.log(compPool);
    // randomly select from list
    // store in variable
    let compChoice = Math.random();
    console.log(compChoice);
    if(compChoice > 0.34){
        compChoice = "r";
    }else if(compChoice < 0.67){
        compChoice = "p";
    }else{
        compChoice = "s";
    }
    console.log(compChoice)
// TODO:determine win/loss
    // if/else statement
    if(userChoice === compChoice){
        alert("Game is a tie");
    }else if(userChoice === "s"){
        if (compChoice === "r"){
            alert("Computer wins, rock beats scissors");
        }else{
            alert("You win, scissors beats paper");
        }
    }else if(userChoice === "r"){
        if(compChoice === "s"){
            alert("You win, rock beats scissors");
        }else{
            alert("Computer wins, paper beats rock");
        }
    }else{
        if(compChoice === "r"){
            alert("You win, paper beats rock");
        }else{
            alert("Computer wins, scissors beats paper")
        }
    }
// TODO:track wins and losses
    // variables for wins/losses/ties
    // show to user end of game
// TODO:play again?
    // pop up with true/false options
    //  if true loop, if false end
    // recursive or while loop will work here