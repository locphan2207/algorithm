// Given two linked lists that intersects each other.
// Find and return the node that they are intersect with each other.
// Node that they are singly linked lists, so there must be Y-shape intersection
// It cannot be X-shape intersection, because each node only has one 'next'

// ----Solution: two runner pointers
// Because two linked lists might have differnet lengths
// We have to find the difference in length, from that we set up 2 pointers
// The longer linked list should start eariler so that two pointers can meet
// at the interseting node
// ex: 2->3->4->5->6->7 and 1->5->6->7, these two intersects at node 5,
// but they are 2-node different in length. so the first linked list pointers
// should start first, then at node 4, the other pointer willstart
// Time: O(2n) -> O(n)

const {LinkedList, Node} = require('./LinkedList');

function findLength(list) {
  let length = 0;
  list.forEach(node => {
    length++;
  });
  return length;
}

function intersection(list1, list2) {
  let lengthDiff = findLength(list1) - findLength(list2); // find length difference

  let pointer1, pointer2;
  if (lengthDiff > 0) { // know which one is shorter, pointer 1 is for the longer one
    pointer1 = list1.head;
    pointer2 = list2.head;
  } else {
    pointer1 = list2.head;
    pointer2 = list1.head;
  }

  while(lengthDiff > 0) { // let pointer1 start first
    pointer1 = pointer1.next;
    lengthDiff--;
  }

  while (pointer1 !== pointer2) { // two pointers start running together
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1; // return after they meet each other
}

const a = new Node(4);
const b = new Node(5);
const c = new Node(6);
const d = new Node(7);
const e = new Node(8);
const f = new Node(9);
const g = new Node(9);
const h = new Node(9);
const i = new Node(9);

const l1 = new LinkedList(a);
l1.append(b);
l1.append(d);
l1.append(e);
l1.append(f);
l1.append(g);
l1.append(h);
l1.append(i);
const l2 = new LinkedList(c);
l2.append(g);

l1.toString();
l2.toString();

console.log(intersection(l1, l2));
