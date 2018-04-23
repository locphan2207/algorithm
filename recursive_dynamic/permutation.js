// Find all permutation of a given string with non-duplicate characters.

// ----Obervation:
// 'a' -> [ 'a' ]
// 'ab' -> [ 'ab', 'ba' ]
// 'abc -> '[ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ]
// Realize that permutation can be divide and conquer.

// ----Solution: Look at other characters permutation
// We choose the first character of the string, and look at the permutation of
// the other characters left in the string.
// We can form new permutation by placing the first character in different position in each
// permutation of the other characters.
// For example: 'abc'
// We choose string a, and other permutation of the other characters are 'bc', 'cb'
// for 'bc' we add a in the first, the middle, and the last position to get -> 'abc', 'bac', 'bca'
// for 'cb' we also add a in the first, the middle, and the last position to get -> 'acb', 'cab', 'cba'

function permutation(string) {
  if (string.length <= 1) return [string];
  const result = [];
  const otherCharPerm = permutation(string.slice(1));
  for (let i = 0; i < otherCharPerm.length; i++) {
    for (let j = 0; j <= otherCharPerm[i].length; j++) {
      const newPerm = otherCharPerm[i].slice(0,j) + string[0] + otherCharPerm[i].slice(j);
      result.push(newPerm);
    }
  }
  return result;
}

console.log(permutation('a'));
console.log(permutation('ab'));
console.log(permutation('abc'));
console.log(permutation('abcd'));
