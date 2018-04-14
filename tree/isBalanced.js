// Given a binary tree. CHeck if it is balanced.
// A balanced tree is a tree that every node has its left nodes and right nodes
// no different than 1 node.

// ----Naive Solution: calculate height for each node
// from root node, calculate left height and right height, check if they are
// different than 2. return false if they are, if not, repeat recursively
// on left and right subtree.
// The problem is, you have to recalculate the height since you go from root to leaves.
// Which is inefficient.
// Time: O(nlogn) n number of nodes

// ----Better solution: Check Height at each node and return false
// if its subtree heights are different more than 1. If not, simply return
// the integer number of the height. It means the return value of checkHeight
// can be either a number or boolean. If it is boolean, we know that we don't have
// to chekc other nodes any more, just straightup return false to the root.
// Time: O(n) n number of nodes


const Node = require('./Node');
const minimalTree = require('./minimalTree');

function isBalanced(root) {
  // if check height returns a number, it means it is balanced
  if (checkHeight(root) === false) return false;
  else return true;
}

function checkHeight(node) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (node.left) leftHeight = checkHeight(node.left); // calculate left height
  if (leftHeight === false) return false; // if left height return boolean value
                                          // it means there is a non-balanced subtree,
                                          // return false right away to upper stack

  if (node.right) rightHeight = checkHeight(node.right);
  if (rightHeight === false) return false;

  if (Math.abs(leftHeight - rightHeight) > 1) return false;
  else return leftHeight + rightHeight + 1;
}

const arr = [1,3,4,5,6,7,8,10,12,30,42];
const root = minimalTree(arr);
console.log(isBalanced(root));

const a = new Node(3);
const b = new Node(4);
const c = new Node(6);
const d = new Node(7);
d.left = new Node(5);
c.left = d;
b.left = c;
a.left = b;
a.right = new Node(10);
console.log(isBalanced(a));
