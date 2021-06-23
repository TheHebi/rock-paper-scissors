// rps psuedoe code

// TODO:capture player choice
    // create pop up prompt for user choice
    let userChoice = prompt("Choose r, p, or s");
    // log info into var
    console.log(userChoice);
    // make usre user only choses valid choice EDGE
// TODO:random computer choice
    let result = "";
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
// TODO:track wins and losses
    // variables for wins/losses/ties
    // show to user end of game
// TODO:play again?
    // pop up with true/false options
    //  if true loop, if false end
    // recursive or while loop will work here