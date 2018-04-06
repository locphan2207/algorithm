// Delete the given node only if it is in the middle (not the first and last node).
// You only have access to that node

//----Solution: We replace and shift every nodes from the right right of
// the deleting node to the left.
// ex:
// 4->5->6->7, delete 5, we replace 5 by 6, 6 by 7
// Time: O(n)

const {LinkedList, Node} = require('./LinkedList');

function deleteMidOne(node) {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

const a = new Node(4);
const b = new Node(5);
const l = new LinkedList(a);
l.append(b);
l.append(new Node(6));
l.append(new Node(5));
l.append(new Node(7));
deleteMidOne(b);

l.toString();
