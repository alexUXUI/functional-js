'use strict';

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

findLongestPalindrome('etergergbananasregergergerg34racecar43');

// bananas
//   banana
//   banan
//   ban
//   ba
//   a
// ananas
//   anana
//   anan
//   ana
//   an
//   a
// nanas
//   nana
//   nan
//   na
//   n
// anas
// nas
// as
// s
