// Given a string of brackets, A matching pair of brackets is not balanced
// if the set of brackets it encloses are not matched.
// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
// For example, {[(])} is not balanced because the contents in between { and } are not balanced.
// Some examples of balanced brackets are []{}(), [({})]{}() and ({(){}[]})[].

// ----Solution: use Stack to store open brakets in order
// Iterating through the string, if it is open brackets like '{', '[' or '(',
// we push it into the stack
// else if it is close brackets, we check if it is the closing bracket of the top one in the Stack
// if it is, we pop it out of the stack because we find the closing one
// if it is not, we return false because we know it is not balanced bracket exression
// Time: O(n)

const Stack = require('./Stack');

function isBalancedBracket(string) {
  const hash = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  function isOpenBracket(char) {
    const keys = Object.keys(hash);
    for (let i = 0; i < keys.length; i++) {
      if (char === keys[i]) return true;
    }
    return false;
  }

  const stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (isOpenBracket(string[i])) stack.push(string[i]);
    else {
      if (hash.length < 1 || hash[stack.peak()] !== string[i]) return false;
      else stack.pop();
    }
  }
  return true;
}

console.log(isBalancedBracket('{[()]}({})'));
console.log(isBalancedBracket('{[()]}({])'));
console.log(isBalancedBracket(']{[()]}({})'));
