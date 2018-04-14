// Given an array of unique integers.
// Write a function to create a binary search tree with minimal height

// ----Solution: Similar to Binary search
// To make the tree has minimal height, we have to choose the middle element
// to become root node.
// Choose mid element, make it a node, recursively make other elements as nodes
// and link them to the current node left and right
// return current when done with the recursive
// Time: O(n) n is number of integers

const Node = require('./Node');

function minimalTree(arr) {
  if (arr.length < 1) return;

  const midIdx = Math.floor(arr.length/2);
  const node = new Node(arr[midIdx]);
  // if (arr.length === 1) return node;

  node.left = minimalTree(arr.slice(0, midIdx));  // left array
  node.right = minimalTree(arr.slice(midIdx+1));  // right array

  return node;
}

module.exports = minimalTree;

// const arr = [1,3,4,5,6,7,8,10,12,30,42];
// const root = minimalTree(arr);
// root.printTreeInOrder();
