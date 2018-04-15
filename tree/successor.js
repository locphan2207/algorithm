// Given a node of a binary tree.
// Write a function to find the next node of in-order successor.
// Assume each node stores its parent reference

// ----Solution:
// There are three main cases for this problem:
// 1. The given node has right subtree, then we have to find the most left of that right subtree
// 2. The given node doesnt have right subtree, and does not have parent, return undefined
// 3. The given node doesnt have right subree, but has parent, trace up until current node is
// a left subtree of upper level parent. Then return that upper level parent.
// Otherwise, keep doing until no more parent, and return undefined.

function Node(value, left, right, parent) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.parent = parent;
}

function nextSuccessor(node) {
  if (node.right) {
    let current = node.right;
    while (current.left) current = current.left;
    return current;
  }

  if (!node.parent) return;

  if (node.parent.left === node) return node.parent;

  if (node.parent.right === node) {
    let current = node.parent;
    while (current.parent && current.parent.right === current) current = current.parent;
    return current.parent;
  }

}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

b.left = a;
b.right = c;
a.parent = b;
c.parent = b;

c.right = d;
d.parent = c;

// e.left = b;
// b.parent = e;

console.log(nextSuccessor(a));
console.log(nextSuccessor(d));
// console.log(nextSuccessor(c));
// console.log(nextSuccessor(e));
