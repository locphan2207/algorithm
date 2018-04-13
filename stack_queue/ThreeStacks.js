// Implement three stacks using one array

//----Solution:
// We have to divide index. So that:
// stack 0: index % 3 + 0
// stack 1: index % 3 + 1
// stack 2: index % 3 + 2

function ThreeStacks() {
  this.arr = [];
  this.length = [0,0,0]; // 3 lengths of 3 stacks in order
}

ThreeStacks.prototype.push = function(stackNumber, value) {
  this.arr[stackNumber + this.length[stackNumber] * 3] = value;
  this.length[stackNumber]++;
};

ThreeStacks.prototype.pop = function(stackNumber) {
  this.length[stackNumber]--;
  this.arr[stackNumber + this.length[stackNumber] * 3] = undefined;
};

ThreeStacks.prototype.toString = function() {
  let string1 = "";
  let string2 = "";
  let string3 = "";
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i]) {
      if (i%3 === 0) {
        string1 += ` ${this.arr[i]}`;
      } else if (i%3 === 1) {
        string2 += ` ${this.arr[i]}`;
      } else if (i%3 === 2) {
        string3 += ` ${this.arr[i]}`;
      }
    }
  }
  return `${string1} ${string2} ${string3}`;
};

const a = new ThreeStacks();
a.push(0, 3);
a.push(2, 4);
a.push(0, 3);
a.push(0, 12);
a.push(0, 9);
a.push(1, 29);
a.pop(0);
console.log(a);
console.log(a.toString());
