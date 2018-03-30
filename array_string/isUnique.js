// Determine if a string has all unique characters.
// Don't use other additional data structures.

// ----Naive solution: Iterating thru the string:
// For each character, iterating again from the current idx to check if there
// is repeating char, return false if yes, otherwise, keep doing it until end string, then return true
// Time: O(n^2)

// function isUnique(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// ----Hash table solution: store characters as keys, value doesn't matter
// Iterating thru string, if we see the character already in the hash, return false,
// otherwise, keep doing it until end string, return true
// Time: O(n)

function isUnique(str) {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) return false;
    else hash[str[i]] = true;
  }
  return true;
}

console.log(isUnique("abcd"));
console.log(isUnique("abcdd"));
console.log(isUnique(""));
console.log(isUnique("fff"));
console.log(isUnique("f32d "));
