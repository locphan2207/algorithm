// Implement Queue using 2 Stacks:
const Stack = require('./Stack');

function Queue() {
  this.inStack = new Stack();
  this.outStack = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.inStack.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.outStack.length < 1) this.transfer();
  return this.outStack.pop();
};

Queue.prototype.transfer = function() {
  while (this.inStack.length > 0) {
    this.outStack.push(this.inStack.pop());
  }
};

Queue.prototype.length = function() {
  return this.inStack.length + this.outStack.length;
};

module.exports = Queue;
//
// const a = new Queue();
// a.enqueue(4);
// a.enqueue(5);
// a.enqueue(6);
// a.enqueue(7);
// console.log(a);
// a.dequeue();
// console.log(a);
