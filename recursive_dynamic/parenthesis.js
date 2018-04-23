// Given number n of pairs of parenthesis. Find all permutations with that
// n number of pairs

// ----SOlution: look at previous result and store new perm to check repeat
// The idea is same as finding permutations with dups characters.
// We divide and conquer the problem. Find all parenthesis permutation with fewer
// n pairs. Then when we hvae previous result, we simply wrap '()' and add '()' in front and at
// the end of each previous result. With each new permutation we created, we have
// to check if already exists in the hash, if yes, we skip, if not, we store them in that hash,
// and add that perm to the result.

function parenthesis(n) {
  if (n===1) return ['()'];
  const result = [];
  const hash = {};
  const prevResult = parenthesis(n-1);
  const newPerm = [];
  for (let i = 0; i < prevResult.length; i++) {
    newPerm[0] = '()' + prevResult[i];
    newPerm[1] = '(' + prevResult[i] + ')';
    newPerm[2] = prevResult[i] + '()';
    newPerm.forEach(perm => {
      if (!hash[perm]) {
        hash[perm] = true;
        result.push(perm);
      }
    });
  }
  return result;
}

console.log(parenthesis(1));
console.log(parenthesis(2));
console.log(parenthesis(3));
