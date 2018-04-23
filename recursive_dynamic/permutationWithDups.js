// Find all permutations of a string that can contain duplicate characters.

// ----Solution: store current permutations in a hash
// The idea is same as regular permutation solution, but this one we store
// all permutations in a hash, and whenever we make new permuration, we check
// with a hask to see if that permutation already added or not.
// If it is not, add them to result, and store them in a hash
// If it is, skip to next permutation.

function permutationWithDups(string) {
  if (string.length <= 1) return [string];
  const result = [];
  const hash = {};
  const otherCharPerm = permutationWithDups(string.slice(1));
  for (let i = 0; i < otherCharPerm.length; i++) {
    for (let j = 0; j <= otherCharPerm[i].length; j++) {
      const newPerm = otherCharPerm[i].slice(0,j) + string[0] + otherCharPerm[i].slice(j);
      if (!hash[newPerm]) {
        hash[newPerm] = true;
        result.push(newPerm);
      }
    }
  }
  return result;
}

console.log(permutationWithDups('a'));
console.log(permutationWithDups('aab'));
console.log(permutationWithDups('aaa'));
