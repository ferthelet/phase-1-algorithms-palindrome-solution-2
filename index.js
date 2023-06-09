function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord === word;
}

/* 
  Add your pseudocode here

  - create a variable to hold the reversed word
  - loop through the word backwards
  - add each letter to the reversed word
  - return whether the reversed word is equal to the original word

*/

/*
  Add written explanation of your solution here

  I looped through the word backwards and added each letter to a new string. Then I returned whether the reversed word was equal to the original word.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;