// Implement a Stack that keeps track of minimum element

//----Solution: Each element should keep track of its minumum 'substack'
// In other words, each element should store minimum from index 0 to its index
// in a look up table.
// Note: In case we have same value elements, we need to keep track two minimum
// in one key inside the look up table. Therefore, the look up table should
// store them as arrays. The most left element in that array will be the minimum
// of element on the top stack
// Time: O(1) for push, pop, min

function Stack() {
  this.array = [];
  this.length = 0;
  this.minLookUp = {};
}

Stack.prototype.push = function(value) {
  const prevValue = this.array[this.length - 1];
  this.array[this.length++] = value;
  if (!prevValue || value < this.minLookUp[prevValue][0]) {
    if (!this.minLookUp[value]) this.minLookUp[value] = [value];
    else this.minLookUp[value].unshift(value);
  } else {
    if (!this.minLookUp[value]) this.minLookUp[value] = [this.minLookUp[prevValue][0]];
    else this.minLookUp[value].unshift(this.minLookUp[prevValue][0]);
  }
};

Stack.prototype.pop = function() {
  const deletingItem = this.array[this.length-1];
  this.array[--this.length] = undefined;
  return deletingItem;
};

Stack.prototype.peak = function() {
  return this.array[this.length-1];
};

Stack.prototype.min = function() {
  return this.minLookUp[this.peak()][0];
};

// const a = new Stack();
// a.push(3);
// a.push(4);
// a.push(2);
// a.push(2);
// a.push(10);
// a.push(0);
// // console.log(a.min());
// console.log(a.peak());
// console.log(a.length);
// a.pop();
// // console.log(a.min());
// console.log(a.peak());
// console.log(a.length);
module.exports = Stack;
