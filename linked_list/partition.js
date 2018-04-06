// Partition a linked list aorund a value x.
// All nodes less than x come before all nodes greater than or equal to x.
// If x value is in linked list. x nodes should be on the right partition,
// but the order does not matter.
// ex: 3->5->8->5->10->2->1
// 3->1->2->10->5->5->8


// ----Solution:
// Traversing through the linked list, if we see node with value < x,
// we move that node in to the front of the list,
// if not, keep traversing.
// The tricky part of this solution is to keep track of the previous node
// in case we need to move current node to front, then we can update previous node.next
// with the next node.
// Time: O(n)

const {LinkedList, Node} = require('./LinkedList');

function partition(linkedList, value) {
  let currentNode = linkedList.head;
  let previousNode; // we need to keep track of previous node to remove node (update previous node.next to another node)
  while (currentNode) { // traversing the linked list
    if (currentNode.value < value) {
      if (!previousNode) { // need this condition in case we the first nodes are < value, we dont do anything
        currentNode = currentNode.next;
      } else {  // otherwise, we move this current node to front
        previousNode.next = currentNode.next;
        currentNode.next = linkedList.head;
        linkedList.head = currentNode;
        currentNode = previousNode.next;
      }
    } else { // keep traversing if current node value > x
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

const a = new Node(4);
const l = new LinkedList(a);
l.append(new Node(5));
l.append(new Node(6));
l.append(new Node(1));
l.append(new Node(7));
l.append(new Node(10));
l.append(new Node(5));
l.append(new Node(7));
l.append(new Node(8));
l.append(new Node(48));

partition(l, 6);
l.toString();
partition(l, 5);
l.toString();
