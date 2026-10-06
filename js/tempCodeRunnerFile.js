
function countLetter(word){
  const letterCount = {} // empty object to hold the letter

  for(let i = 0; i < word.length; i++){ // traverse the word array 
    const letter = word[i] // assign each word index to letter 

    if(letterCount[letter]){
      letterCount[letter] += 1; // for duplicate word increase the letter count
    } else {
      letterCount[letter] = 1; // else let letter count be 1
    }
  }

  return letterCount;
}

// console.log(countLetter("APPLE"));

function scoreGuess(secret,guess){
  const marks = new Array(5).fill("absent"); //  an array of 5 empty boxes assuming 
  const counts = countLetter(secret);

  // pass 1 marking correct for correst words and position 
  for(let i = 0; i < 5; i++){ 
    if(guess[i] === secret[i]){ // if guess is correct then 
      marks[i] = "correct"; // if guess is correct then replace "absent " with "correct" in that specific index
      counts[secret[i]] -= 1; // now that correct index guessed right is removed leaving 4 positions only 
    }
  }

  // pass 2 for checking and marking the remaining absent after pass 1 "present" if the guess has the word which the secret also have but in different position  
  for(let i = 0; i < 5; i++){
    if(marks[i] === "absent" && counts[guess[i]] > 0){ // now check the postion that were left absent and whose count is now greater than 0
      marks[i] = "present"; // mark them present
      counts[guess[i]] -= 1; // then decrease the count 
    }
  }

  // restructuring guess[] and marks[]
  const result = []
  for(let i = 0; i < 5; i++){
    result.push({letter: guess[i], mark: marks[i]});
  }
  return result;
}
console.log(scoreGuess("SNAKE", "SNAKE"));