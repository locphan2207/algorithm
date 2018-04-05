function Stack() {
  this.array = [];
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.array[this.length++] = value;
};

Stack.prototype.pop = function() {
  const deletingItem = this.array[this.length-1];
  this.array[--this.length] = undefined;
  return deletingItem;
};

Stack.prototype.peak = function() {
  return this.array[this.length-1];
};

// const a = new Stack();
// a.push(3);
// console.log(a.peak());
// a.push(4);
// console.log(a.peak());
// a.pop();
// console.log(a.peak());

module.exports = Stack;
