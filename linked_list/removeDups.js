// Write function to remove dups from a linked list.
// Solve it if temporary buffer is not allowed

//----Solution: Hash table
// Store nodes values into hash table, as we traverse the linked list,
// we check if the current node value is already exist in the hash table,
// if it is, remove the current Node, else, keep traversing.
// Time: O(n)
// Space: O(n)

const {LinkedList, Node} = require('./LinkedList');

function removeDups(linkedList) {
  const hash = {};
  linkedList.forEach(node => {
    if (hash[node.value]) linkedList.remove(node);
    else hash[node.value] = true;
  });
}

const a = new Node(4);
const l = new LinkedList(a);
l.append(new Node(5));
l.append(new Node(6));
l.append(new Node(5));
l.append(new Node(7));
l.append(new Node(5));
l.append(new Node(5));
l.append(new Node(7));
l.append(new Node(8));
l.append(new Node(5));
removeDups(l);
l.toString();
