function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("refer"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("boat"));


/* 
  Add your pseudocode here

  1. Create a function called isPalindrome
  2. Function receives a string as an argument
  4. Check if the string is the same backwards as it is forwards
  5. Function returns true if the string is indeed a palindrome
  6. Funciton returns false if it is not a palindrome
  7. Test code using console.log()

  radar === radar // true
  boat == boat // false

*/

/*
  Add written explanation of your solution here

  Created a function named isPalindrome. Used the parameter 'name'
  as a placeholder for all possible palindromes that will pass by. 
  The function returns the value and the strict equality operator
  checks if both values are the same by splitting, reversing, and
  joining the values back together. The strict eqiality operator 
  does not convert anything. The value and the type must be the 
  same for the comparison to be true. If not, the result is false.
  The function is then tested to see if it works by using the
  console.log() built-in funciton.
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
