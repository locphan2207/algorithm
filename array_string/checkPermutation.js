// Given 2 strings, check if one is permutation of the other

// ----Naive solution:
// Iterating through either string, for each char, itterating the other string
// to check if other string has that char
// if not, return false, otherwise keep doing until end
// but however, this solution is hard to solve the case where there are many
// same characters in a string, we cannot keep track of each character numbers
// -> So, think of other solution


// ----Hash table solution:
// Iterating through each string, store their character counts in 2 hash table,
// then compare the hash table values, see if there is any difference:
// If there is, return false, else return true
// Time: O(n1 + n2) -> O(n)
// Space: O(m) m is number of unique characters
function checkPermutation(str1, str2) {
  const hash1 = countChar(str1);
  const hash2 = countChar(str2);
  if (Object.keys(str1).length !== Object.keys(str2).length) return false;
  else Object.keys(str1).forEach(key => {
    if (hash1[key] !== hash2[key]) return false;
  });
  return true;
}

function countChar(str) {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) hash[str[i]]++;
    else hash[str[i]] = 1;
  }
  return hash;
}

console.log(checkPermutation("abcd", "acdb"));
console.log(checkPermutation("abcd", "dcba"));
console.log(checkPermutation("abcd", "bacd"));
console.log(checkPermutation("abcd", "d"));
console.log(checkPermutation("abcd", "aaaabbbbccccdddd"));
console.log(checkPermutation("abcd", "re3rf"));
console.log(checkPermutation("abcd", "22fdfabcd"));
