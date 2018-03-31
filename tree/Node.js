function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

const a = new Node(4);
const b = new Node(5);
const c = new Node(6,a,b);

console.log(c.value);
console.log(c.left);
console.log(c.right);
