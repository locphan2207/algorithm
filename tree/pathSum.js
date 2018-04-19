// Given a binary tree and a number, each node contains an integer value (positive and negative)
// Find and count the number of paths that sum to the given number.
// Path doesn't have to start at root or end at leaves.

const Node = require('./Node');

function pathSum(root, targetSum) {
  if (!root) return 0;
  return countPath(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
}

function countPath(node, targetSum, prevSum = node.value) {
  let result = 0;
  let leftCount = 0;
  let rightCount = 0;
  // console.log(node.value, 'prev: ', prevSum);
  if (node.left){
    if (prevSum + node.left.value === targetSum) result ++;
    leftCount = countPath(node.left, targetSum, prevSum + node.left.value);
  }
  if (node.right){
    if (prevSum + node.right.value === targetSum) result ++;
    rightCount = countPath(node.right, targetSum, prevSum + node.right.value);
  }
  return result + leftCount + rightCount;
}

const a = new Node(4);
a.left = new Node(-2);
a.right = new Node(-3);

const b = new Node(-2);
b.left = a;

const c = new Node(3);
c.left = b;

const d = new Node(-9);
d.right = new Node(8);

const e = new Node(7);
e.left = d;

c.right = e;

// console.log(countPath(c, 1));
console.log(pathSum(c, 1));
