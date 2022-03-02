function isPalindrome(word) {
  // Write your algorithm here
  let backwards = reverseWord(word)
  if(word === backwards) {
    return true
  }
  else
    return false

}

function reverseWord(string) {
  if(string === "") {
    return ""
  }
  else
    return reverseWord(string.substr(1)) + string.charAt(0)
}

/* 
  Add your pseudocode here
  create a function that 
  take a string and reverse it using recursion
  then call that function isPalindrome and check if the word passed in is equal to the word passed in but reversed
*/

/*
  Add written explanation of your solution here
  I created a function that took a string and checked if it was empty if not it uses recursion to reverse the word
  then it gets called in the ispalindrome function to check whether the word is equal to itself backwards
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
