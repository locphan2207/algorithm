// Given a string, write a function to check if there is a permutation that is palindrome
// palindrome does not need to be limited to just dictionary words
// palindrome ignore white space

// ----Naive Solution: find all permutations, then check palindrome for each


// ----Better Solution: count each character and store in hash.
// There will be permutation palindrome if :
// all the counts are even or only one count is odd

function isPalindromePerm(str) {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    if (hash[str[i]]) hash[str[i]] ++;
    else hash[str[i]] = 1;
  }
  let oddCount = 0;
  const charCounts = Object.values(hash);
  for (let i = 0; i < charCounts.length; i++) {
    if (charCounts[i] % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) return false;
    }
  }
  return true;
}

console.log(isPalindromePerm('tact coa'));
console.log(isPalindromePerm('ta tf'));
console.log(isPalindromePerm('t a c t coa'));
