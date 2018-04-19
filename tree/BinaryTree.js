// Implement a Binary tree with insert, find, remove and getRandomNode functions

// ----SOlution:
// I decided to implement a Binary tree with an instance variable array that
// keeps all pointers to all nodes. So that we can easily find random nodes from that.
// and also easy to find a node by just interating that array.

const Queue = require('../stack_queue/Queue');
const Node = require('./Node');

function BinaryTree(node) {
  this.root = node;
  this.nodes = [node];
  this.availableNode = node;
  this.queue = new Queue();
}

BinaryTree.prototype.insert = function(node) {
  if (!this.availableNode.left) {
    this.availableNode.left = node;
  } else if (!this.availableNode.right) {
    this.availableNode.right = node;
  } else {
    this.availableNode = this.queue.dequeue();
    this.availableNode.left = node;
  }
  this.queue.enqueue(node);
  this.nodes.push(node);
};

BinaryTree.prototype.find = function(value) {
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === value) return this.nodes[i];
  }
};

BinaryTree.prototype.remove = function(value) {
  // find the deleting node and the previous node, and remove deleting node out of array
  let prevNode, deletingNode;
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].left && this.nodes[i].left.value === value) {
      prevNode = this.nodes[i];
    }
    if (this.nodes[i].right && this.nodes[i].right.value === value) {
      prevNode = this.nodes[i];
    }
      // Swap current node with last node in array, and pop it out of array:
    if (this.nodes[i].value === value) {
      deletingNode = this.nodes[i];
      [this.nodes[this.nodes.length-1], this.nodes[i]] = [this.nodes[i], this.nodes[this.nodes.length-1]];
      this.nodes.pop();
    }

    if (prevNode && deletingNode) break;
  }

  // find the leave of subtree from the deleting node:
  const leave = this.pickLeave(deletingNode);

  // Replace deleting node with picked leave in the tree:
  if (prevNode.left === deletingNode) prevNode.left = leave;
  if (prevNode.right === deletingNode) prevNode.right = leave;
  leave.left = deletingNode.left;
  leave.right = deletingNode.right;
  deletingNode.left = undefined;
  deletingNode.right = undefined;
};

// This function pick a leave of subtree starting from given node,
// and cut that leave out of tree, and return that leave
BinaryTree.prototype.pickLeave = function(node, prevNode) {
  if (!node.left && !node.right) {
    if (prevNode) {
      if (prevNode.left === node) prevNode.left = undefined;
      if (prevNode.right === node) prevNode.right = undefined;
    }
    return node;
  }

  if (node.left) return this.pickLeave(node.left, node);
  if (node.right) return this.pickLeave(node.right, node);
};

BinaryTree.prototype.randomNode = function() {
  const random = Math.floor(Math.random() * this.nodes.length);
  return this.nodes[random];
};


const a = new BinaryTree(new Node(1));
a.insert(new Node(2));
a.insert(new Node(3));
a.insert(new Node(4));
// console.log(a);

a.remove(2);
// console.log(a.nodes);

// console.log(a.find(2));
// console.log(a.find(3));

a.insert(new Node(10));
console.log(a.randomNode());
