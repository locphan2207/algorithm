// Replace all white spaces inside a string into '%20'
// Two args: str and true length (length from first char to last char)
// The reason they gave true length is in case of spaces after the last char,
// we don't have to replace those white spaces

// ----Naive:
// We can replace inplace, but the length and current idx of the string
// will change, so we have to handle that by plus 2 current idx and the true length,
// and perfome a lot of shifting when we insert '%20'
// So, think of other solution

// ----Better:
// Interating through string to count all the white spaces needed to replace
// From that we come up with the new length suposed to be if we replace with '%20'
// Interating from the end of string with two idx pointers:
// One idx2 at the very end, one idx1 at the last char
// if idx1 is normal char, copy to idx2, idx1 and idx2 += 1
// if idx1 is white-space, insert '%20', idx2 += 3, idx1 += 1
// stop when idx1 == 0
// Time: O(n)
// Note: Cannot do In-place in JavaScript because string in javascript is IMMUTABLE

function URLify(str, trueLength) {
  let whiteSpaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    if (str[i] === ' ') whiteSpaceCount ++;
  }
  const newLength = trueLength + whiteSpaceCount * 2;
  let emptyStr = '';
  for (let i = 0; i < whiteSpaceCount; i++) {
    str += '  '; // add 2 empty spaces
  }
  let idx2 = newLength - 1;
  let idx1 = trueLength - 1;
  while (idx1 >= 0) {
    if (str[idx1] === ' ') {
      str[idx2--] = '0';
      str[idx2--] = '2';
      str[idx2--] = '%';
      idx1--;
    } else {
      str[idx2--] = str[idx1--];
    }
  }
  return str;
}

//console.log(URLify('Mr John Smith   ', 13));
// console.log(URLify('Mr John  Smith  ', 14));
// console.log(URLify('Mr John    Smith ', 15));
