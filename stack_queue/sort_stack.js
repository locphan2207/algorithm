// Write a program to sort a stack using only another stack as place holder.
// Smallest element will be on top

//----Solution:
// We need to sort element into the 2nd stack with biggest element on top,
// then push them back to original stack
// Pop element out of the original stack, then put it into the 2nd stack if
// the top element of 2nd stack is smaller than or 2nd stack is empty.
// Other wise, if the top element of 2nd stack is bigger than current poping element
// We have to pop that top element of 2nd stack out, then push it into original stack.
// Keep doing that until the top element of 2nd stack is smaller. 
const Stack = require('./Stack');

function sortStack(stack) {
  const tempStack = new Stack();
  while (stack.length > 0) {
    const holder = stack.pop();
    if (tempStack.length < 1 || tempStack.peak() < holder) {
      tempStack.push(holder);
    } else {
      while (tempStack.peak() > holder) {
        stack.push(tempStack.pop());
      }
      tempStack.push(holder);
    }
  }
  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }
}

const a = new Stack();
a.push(3);
a.push(1);
a.push(9);
a.push(12);
a.push(2);
a.push(1);
a.push(5);
sortStack(a);
console.log(a.array);
