const {LinkedList, Node} = require('./LinkedList');

function returnKthToLast(linkedList, k) {
  let distance = 1;
  let left;
  linkedList.forEach(node => {
    if (distance === k) left = linkedList.head;
    if (distance > k) left = left.next;
    distance++;
  });
  return left;
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
l.toString();
console.log(returnKthToLast(l, 5));
console.log(returnKthToLast(l, 6));
