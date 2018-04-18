// A BST can be created by traversing through an array from left to right and insert each element
// Given BST with distinc elements, find all possible arrays that oculd let to this tree
// Ex:  2
//    1   3
// Output: [2,1,3],[2,3,1]

const Node = require('./Node');

function bstSequence(root) {
  if (!root) return [];
  const result = [];

  const leftResult = bstSequence(root.left);
  const rightResult = bstSequence(root.right);

}
