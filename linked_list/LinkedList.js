function Node(value) {
  this.value = value;
  this.next = undefined;
}

Node.prototype.hashString = function() {
  return `${(new Date()).getTime() * this.value * Math.random()}`; // to generate hash code
};

function LinkedList(headNode) {
  this.head = headNode;
}

LinkedList.prototype.append = function(newNode) {
  let currentNode = this.head;
  while (currentNode.next) currentNode = currentNode.next;
  currentNode.next = newNode;
};

LinkedList.prototype.remove = function(node) {
  let currentNode = this.head;
  while (currentNode.next !== node) currentNode = currentNode.next;
  currentNode.next = node.next;
};

LinkedList.prototype.forEach = function(callback) {
  let currentNode = this.head;
  while (currentNode) {
    callback(currentNode);
    currentNode = currentNode.next;
  }
};

LinkedList.prototype.toString = function() {
  let resultString = "";
  this.forEach(node => {
    resultString += `->${node.value}`;
  });
  console.log(resultString.slice(2));
};

module.exports = {LinkedList, Node};

// const a = new Node(4);
// const b = new Node(5);
// const c = new Node(6);
// const d = new Node(7);
// const l = new LinkedList(a);
// l.append(b);
// l.append(c);
// l.append(d);
// l.toString();
// l.remove(c);
// l.toString();
