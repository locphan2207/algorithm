// There are 3 types of edit: insert, remove, replace
// Given 2 strings, check if they are one edit away.
// In other words, you only need to edit once (insert, remove or replace)
// to make them equal

// Solution: Hash table count
// Iterating 2 strings to store their char counts in 2 hash tables
// Compare their hash table counts:
// return true if there is only 1 difference (either in total pairs or character)
// else return false
// Time: O(n)

function isOneEditAway(str1, str2) {
  const hash1 = charCount(str1);
  const hash2 = charCount(str2);
  let diffCount = 0;
  let checkHash, otherHash;
  if (Object.values(hash1).length > Object.values(hash2).length) {
    checkHash = hash1;
    otherHash = hash2;
  } else {
    checkHash = hash2;
    otherHash = hash1;
  }

  const keys = Object.keys(checkHash);
  for (let i = 0; i < keys.length; i++) {
    if (checkHash[keys[i]] !== otherHash[keys[i]]) {
      diffCount++;
      if (diffCount > 1) return false;
    }
  }
  return true;
}

function charCount(str) {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) hash[str[i]]++;
    else hash[str[i]] = 1;
  }
  return hash;
}

console.log(isOneEditAway('pale', 'ple'));
console.log(isOneEditAway('pales', 'pale'));
console.log(isOneEditAway('pale', 'bale'));
console.log(isOneEditAway('pales', 'bake'));
