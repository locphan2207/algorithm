// Given a binary tree, write a function so that at each depth/level,
// it will create a linked list of all nodes at that level.

// ----SOlution: Similar to BFS
// Because we go level by level, it makes sense to use similar algorithm as BFS.
// We use a queue to store the next nodes.
// However, we have to create different linked lists for each level.
// We have to keep track or mark the last node of each level.
// The last node of each level will be the most right node.
// When we enqueue next level nodes, we keep track and find the next mark of next level
// so when we reach the mark of current level, we can update mark with next mark,
// and also increment the current level
// Time: O(n) n is number of nodes.

const minimalTree = require('./minimalTree');
const Queue = require('../stack_queue/Queue');
const {Node, LinkedList} = require('../linked_list/LinkedList');

function listOfDepths(root) {
  const queue = new Queue();
  queue.enqueue(root);
  let mark = root; // mark the ending node of the current level
  const lists = [];
  let level = 0;
  let nextMark;

  while (queue.length() > 0) {
    let current = queue.dequeue();
    if (current.left) {
      queue.enqueue(current.left);
      nextMark = current.left;  // find the next mark for next level
    }
    if (current.right) {
      queue.enqueue(current.right);
      nextMark = current.right; // update next Mark if there is still other nodes on next level
    }

    if (lists[level]) lists[level].append(current); // add current node to current linked list
    else lists[level] = new LinkedList(current); // create new linked list in case we just start new level

    if (current === mark) { // if this is the ending node
      mark = nextMark; // update new mark
      lists[level].toString();
      level++;  // go to next level
    }
  }
  return lists;
}

const arr = [1,3,4,5,6,7,8,10,12,30,42];
const root = minimalTree(arr);
listOfDepths(root);
