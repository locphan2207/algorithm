// ----First approach, check every node if left < value and right > value.
// It is not correct because in BST, all values of sub nodes need to be < current node
// ex:   3
//     2   5
//   1  4        -> NOT BST, even at every node, its left < its value, and its right > value

// ----First solution: check every node, find the max of left sub-tree and max of right sub-tree,
// then compare min and right with current node value
// It works, but you have to traverse every node and find min max from sub-tree,
// which we will have to also traverse every sub-tree
// This means with this solution, we have to traverse a node many times
// -> takes a lot of time

// ----Best solution: check every node with a value range which that node
// is supposed to be in. if not, return false
// We start at root, with the range of the MIN and MAX an integer can be
// in the Javascript language.
// Time: O(n) n is number of node

const Node = require('./Node');

function checkBinaryTree(node, min, max) {
  if (!node) return true;
  if (node.value < min || node.value > max) return false;
  return checkBinaryTree(node.left, min, node.value) &&
    checkBinaryTree(node.right, node.value, max);
}

function isBinaryTree(root) {
  return checkBinaryTree(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}



let a = new Node(1);
let b = new Node(4);
let c = new Node(2, a, b);
let d = new Node(5);
let e = new Node(3, c, d);
console.log(isBinaryTree(e));

a = new Node(1);
b = new Node(3);
c = new Node(2, a, b);
d = new Node(5);
e = new Node(4, c, d);

console.log(isBinaryTree(e));
