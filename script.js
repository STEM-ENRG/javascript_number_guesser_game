let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  // if human is less than or equal to computer = human wins, else computer wins
  // if (humanDifference <= computerDifference) {
  //   return true;
  // } else {
  //   return false;
  // }

  // a simplier way to write the code above = the output will return either true or false as above
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// when called, this increases the currentRoundNumber by 1
const advanceRound = () => currentRoundNumber++;
