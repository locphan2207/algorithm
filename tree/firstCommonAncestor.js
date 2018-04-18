// Given a binary tree with two nodes. Find the first common ancestor.
// In other words, find the deepest node which is the ancestor of the two given nodes

// ---- Solution 1: in case each node store the parent node.
// We choose one given node, trace up to its parent, and check the other branch
// of the parent to see if there is the other node in that branch, if there is,
// return that parent node. If not, keep going up to the next parent,
// repeat until we find it.
// The reason this solution is bad because we have to perform so much seaching for
// each parent node.

// ---- Solution 2: In case each node does not store its parent.
// We need to write a helper function to check if the node we are looking for
// is in the subtree.
// Go from root, we check if either two given nodes are in two different left and right subtrees.
// if yes, the current node is the first common ancestor.
// if not, the given node must both be in either left or right subtree.
// recursively call the function on that subtree where both nodes are in.
// repeat until we find the common node.
// Time: 

const Node = require('./Node');

function firstCommonAncestor(root, node1, node2) {
  if ((hasNode(root.left, node1) && hasNode(root.right, node2)) ||
    (hasNode(root.left, node2) && hasNode(root.right, node1))) {
    return root;
  }

  if (hasNode(root.left, node1) && hasNode(root.left, node2)) {
    return firstCommonAncestor(root.left, node1, node2);
  }

  if (hasNode(root.right, node1) && hasNode(root.right, node2)) {
    return firstCommonAncestor(root.right, node1, node2);
  }

  return 'could not find';
}

function hasNode(root, node) {
  if (!root) return false;
  if (root === node) return true;
  else return hasNode(root.left, node) || hasNode(root.right, node);
}

const a = new Node(3);
const b = new Node(4);
const c = new Node(6);
const d = new Node(7);
const e = new Node(5);
const f = new Node(8);
const g = new Node(9);

a.left = b;
a.right = c;
c.left = d;
b.right = f;
b.left = e;
e.right = g;

console.log(firstCommonAncestor(a, f, d));
console.log(firstCommonAncestor(a, f, g));
