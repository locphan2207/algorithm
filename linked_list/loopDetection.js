// Given a linked list that has a loop. Find where the loop starts.
// Return the node where the loop starts

// Solution: Store all nodes in hash
// THen check as we traverse linked list, if we find a node that is already
// stored in hash, then return that node.
// Note: The tricky part is we have to find a hash function to store object.
// So I add a hashString instance variable in each node with random factor, time, value
// and convert that to string and store in hash.
// Time: O(n)
// Space: O(n)

const {LinkedList, Node} = require('./LinkedList');

function loopDetection(list) {
  const hash = {};
  let currentNode = list.head;
  while(currentNode) {
    if (hash[currentNode.hashString()]) return currentNode;

    else hash[currentNode.hashString()] = true;
    currentNode = currentNode.next;
  }
}
const a = new Node(4);
const b = new Node(4);
const c = new Node(4);
const d = new Node(4);
const e = new Node(4);
const f = new Node(4);

const l1 = new LinkedList(a);
l1.append(b);
l1.append(c);
l1.append(d);
l1.append(e);
l1.append(f);
l1.append(c);
// l1.toString();
console.log(c);
console.log(loopDetection(l1));
