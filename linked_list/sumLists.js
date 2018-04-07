// Numbers are represented by linked list.
// Each node hold a digit of that number. The first node holds the Least
// Significant Digit, and the last one holds the Most Significant Digit.
// Given two linked lists, sum them up, then return result also as a linked list.
// Ex: 7->6->1 and 1->0 will return 8->6->1 because 167 + 01 = 168

// ----Solution:
// Traversing both linkedlist, then add their current Node value,
// then append that to result linekd list
// Node: if one of the list ends before the other, we have to handle that
// Time: O(n)

// Note: if we store number in linked list the other way, the head of list
// holds the Most Significant Digit, and the last node holds the Least Significant
// Then, we hvae to traverse to the last node, then add digit from the last node to
// the head.
// Time: Traverse 2 times so it is O(2n)

const {LinkedList, Node} = require('./LinkedList');

function sumLists(list1, list2) {
  let currentDigit1 = list1.head;
  let currentDigit2 = list2.head;
  let result;
  let carry = 0;
  while (currentDigit1 || currentDigit2) {
    const d1 = currentDigit1 ? currentDigit1.value : 0;
    const d2 = currentDigit2 ? currentDigit2.value : 0;
    console.log(d1, d2);
    const sum = d1 + d2 + carry;
    carry = Math.floor(sum / 10);
    if (result) result.append(new Node(sum % 10)); // if we already create the result linked list, just append new digit
    else result = new LinkedList(new Node(sum % 10)); // if not, create new result linked list
    currentDigit1 = currentDigit1 ? currentDigit1.next : undefined;
    currentDigit2 = currentDigit2 ? currentDigit2.next : undefined;
  }
  return result;
}

const l1 = new LinkedList(new Node(7));
l1.append(new Node(6));
l1.append(new Node(1));
const l2 = new LinkedList(new Node(2));
l2.append(new Node(4));
sumLists(l1, l2).toString();
