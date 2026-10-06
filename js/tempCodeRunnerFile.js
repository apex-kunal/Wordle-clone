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

  // pass 1 
  for(let i = 0; i < 5; i++){ 
    if(guess[i] === secret[i]){ // if guess is correct then 
      marks[i] = "correct"; // if guess is correct then replace "absent " with "correct" in that specific index
      counts[secret[i]] -= 1; // now that correct index guessed right is removed leaving 4 positions only 
    }
  }

  // pass 2
  for(let i = 0; i < 5; i++){
    if(mark[i] === "absent" && counts[guess[i]] > 0){
      mark[i] = "present";
      counts[guess[i]] -= 1;
    }
  }

     

  return marks;
}

console.log(scoreGuess("SNAKE", "EERIE")); // expect: absent, absent, absent, absent, correct
console.log(scoreGuess("APPLE", "PAPER"));  // expect: present, present, correct, present, absent