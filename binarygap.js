// The number 529 has binary representation 1000010001 and
// contains two binary gaps: one of length 4 and one of length 3.
// The number 20 has binary representation 10100 and contains one
// binary gap of length 1. The number 15 has binary representation 1111
// and has no binary gaps.

'use strict';

let binary = []
let valGap = []

const convertToBinary = (number) => {
  var val = (number >>> 0).toString(2)
  for(var i = 0; i < val.length; i++){
    binary.push(val[i])
  }
  return binary;
}

const findGaps = (val) => {
  console.log('heres the number in binary: ', val)
  for(var i = 0; i < val.length; i++){
    if(val[i] == 0 && val[i + 1] == 1 || false && val[i - 1] == 1 || false) {
      valGap.push(val[i])
    }
  }
  return valGap.length
}

const binaryGap = (num) => {
  var val = convertToBinary(num)
  var gaps = findGaps(val)
  return gaps
}

console.log("The number of gaps is: ", binaryGap(43555));

