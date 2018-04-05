// Implement a method to perform basic string compression using the counts of
// repeated characters. If output string not smaller than orginal, return orignal
// Ex: 'aabcccccaa' -> 'a2b1c5a2', 'aabbcaad' -> 'aabbcaad'

// ----Solution:
// Iterating string, at each char, we count number of same char right after current char
// Stop counting until see different char, then put in result string
// if result string >= original string, return original
// else, return result
// Time: O(n)
// Space: O(n)

function stringCompression(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) count++;
    else {
      result += `${str[i]}${count}`;
      count = 1;
    }
  }
  if (result.length >= str.length) return str;
  else return result;
}

console.log(stringCompression('aabbcccccaaa'));
console.log(stringCompression('aabbca'));
console.log(stringCompression('aabbcdccaa'));
