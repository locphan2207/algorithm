// Check if a linked list is palindrome

// ----SOlution:
// Traverse the linked list, store each node to array in same order
// Then, traverse again, this time check node value with what were stored in array but in reverse order/
// If we find a difference, it is not palindrome, return false,
// Else, keep doing until end list, then return true
// Time: O(2n) -> O(n)
const {LinkedList, Node} = require('./LinkedList');

function isPalindrome(linkedList) {
  const arr = [];
  let idx = 0;
  linkedList.forEach(node => {
    arr[idx++] = node.value;
  });
  let currentNode = linkedList.head;
  while (currentNode) {
    idx--;
    if (arr[idx] !== currentNode.value) return false;
    currentNode = currentNode.next;
  }
  return true;
}

const a = new Node(4);
const l = new LinkedList(a);
l.append(new Node(5));
l.append(new Node(6));
l.append(new Node(1));
l.append(new Node(7));
l.append(new Node(7));
l.append(new Node(1));
l.append(new Node(6));
l.append(new Node(5));
l.toString();
console.log(isPalindrome(l));
l.append(new Node(4));
console.log(isPalindrome(l));
