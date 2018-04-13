// Imagine a stack of plates. If the stack gets too high, it might topple.
// THerefore, in real life, we would likely start a new tack when the previous
// stack exceeds some threshold.
// Implement a data structure SetofStacks that mimics this. SetofStacks should
// be composed of several stakcs and should create a new stack once the previous
// one exceeds capacity.
// Push and Pop should behave identically to a single stack. That means
// pop should return the same value as a single stack.


//----Solution: Stacks of substacks
// Imagine you keep all the substacks in side a big stack.
// Whenever your substack reachs capacity, you push in a new substack
// Whenever your substack pop all elements, you also pop that substack out of the stacks

const Stack = require('./Stack');

function StackOfPlates() {
  this.stacks = [new Stack()];
  this.numberOfStacks = 1;
}

StackOfPlates.prototype.pushStack = function() {
  this.stacks.push(new Stack());
  this.numberOfStacks++;
};

StackOfPlates.prototype.popStack = function() {
  this.stacks.pop();
  this.numberOfStacks--;
};

StackOfPlates.prototype.push = function(value) {
  const currentStack = this.stacks[this.numberOfStacks - 1];
  currentStack.push(value);
  if (currentStack.length >= 3) this.pushStack();
};

StackOfPlates.prototype.pop = function() {
  const currentStack = this.stacks[this.numberOfStacks - 1];
  currentStack.pop();
  if (currentStack.length < 1) this.popStack();
};

StackOfPlates.prototype.peak = function() {
  return this.stacks[this.numberOfStacks-1].peak();
};

const a = new StackOfPlates();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.push(6);
a.push(7);
a.push(8);
console.log(a.peak());
a.pop();
a.pop();
a.pop();
console.log(a.peak());
