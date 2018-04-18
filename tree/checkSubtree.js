// Given two binary trees T1, T2. Check if T2 is a subtree of T1.

// ----SOlution:
// We have to traverse tree 1 to find the nodes that identical to the root node
// of tree 2 using BFS. WHen we find it, we have to check if they are two identical tree,,
// if they are identical tree, return true. If not, find the next identical node,
// then check if they are identical tree again.
// I write a helper fucntion to find the identical node with root of tree 2.
// that function takes a callback, that callback is invoked when two identical nodes
// are found. That callback is a function to check if the two trees are identical.
//

const Node = require('./Node');
const Queue = require('../stack_queue/Queue');

function checkSubtree(root1, root2) {
  return findSameNodes(root1, root2, isSameTree);
}

function findSameNodes(root, node, cb) {
  const queue = new Queue();
  queue.enqueue(root);

  while (queue.length() > 0) {
    const current = queue.dequeue();
    if (current.value === node.value) {
      const isSame = cb(current, node);
      if (isSame === true) return true;
    }

    if (current.left) queue.enqueue(current.left);
    if (current.right) queue.enqueue(current.right);
  }

  return false;
}

function isSameTree(root1, root2) {
  if (!root1 && !root2) return true;
  if ((!root1 && root2) || (!root2 && root1)) return false;
  if (root1.value !== root2.value) return false;
  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}

const a = new Node(3);
const b = new Node(4);
a.left = new Node(5);
a.right = b;
b.right = new Node(6);

const x = new Node(3);
const y = new Node(3);
const z = new Node(4);
x.right = y;
y.left = new Node(5);
y.right = z;
z.right = new Node(6);

console.log(checkSubtree(x, a));
