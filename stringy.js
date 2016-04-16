'use strict';

var longest = 0;
var longestPal = ''

function findTheLongest(word){ // takes a word of your choice
  for(var i = 0; i < word.length; i++){ // iterates over each character
    var wordMinusOneFromBeginning = word.substr(i, word.length) // for each letter, create the word minus the first char
    for(var j = wordMinusOneFromBeginning.length; j > 0; j--){ // for the length of the word minus the first char
      var wordMinusOneFromEnding = wordMinusOneFromBeginning.substr(0, j) // create a word minus the end character
      if(wordMinusOneFromEnding <= 0) // make sure the value is more that 0,
      continue // if more than zero, proced to next if statement
      console.log('checking for palidrome: ', wordMinusOneFromEnding);
      if(isThisAPalidrome(wordMinusOneFromEnding)){ // check if the word minus the first character, minus the last character = a plaindorme
        if(wordMinusOneFromEnding.length > longestPal){ // if it is
          longestPal = wordMinusOneFromEnding.length; // save its length
          longest = wordMinusOneFromEnding // and save the string itself
        } // exit the statement that updates the longest palidrome
      } // exit the stament that checks for a palidrome
    } // exit the loop that goes backwards and takes a letter off the ending
  } // exit the loop that goes forward and takes off the beginning letter
  console.log('heres the longest string: ' + longest + ' its ' + longestPal + ' charachters in length');
  return longest // return the longest palidrome! :)
}
console.log(findTheLongest('bananas'));

function isThisAPalidrome(word){
  var reverse = word.split('').reverse().join('')
  return word == reverse
}

function findLongestPalindrome(word) {
  var longestPalindrome = ''
  var longestPalindromeLength = 0
  for(var i = 0; i < word.length; i++){
    var removeFirstChar = word.substr(i, word.length)
    for(var j = removeFirstChar.length; j > 0; j--){
      var removeLastChar = removeFirstChar.substr(0, j)
      if(removeLastChar <= 0)
      continue
      if(isThisAPalidrome(removeLastChar)){
        if(removeLastChar.length > longestPalindromeLength){
          longestPalindrome = removeLastChar
          longestPalindromeLength = removeLastChar.length
        }
      }
    }
  }
  return console.log('longest palidrome: ' + "'" +  longestPalindrome +
   "'" + ' is ' + longestPalindromeLength + ' in length.');
}

findLongestPalindrome('bananas');

// bananas
// banana
// banan
// ban
// ba
// a
// ananas
// anana
// anan
// ana
// an
// a

const resverseWord = (wordToReverse) => {
  let reversedWord = []
  for(var i = wordToReverse.length - 1; i > -1; i = i - 1){
    var charater = wordToReverse[i]
    reversedWord.push(charater)
  }
  return reversedWord.join('')
}

const compareWords = (originalWord, inverse) => {
  if(originalWord === inverse){
    console.log("Palindrome detected:", originalWord + ' = ' + inverse);
  } else {
    console.log('Not a palindrome',  originalWord + ' != ' + inverse);
  }
  return
}

const isPalindrome = (word) => {
  var inverse = resverseWord(word)
  return compareWords(word, inverse)
}

console.log(isPalindrome('racecar'));
