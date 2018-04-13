// An Animal shelter holds dogs and cats. It operates on a strictly "FIFO"
// People must adopt the oldest of dogs or cats or any.
// Create a data structure that maintains this system.
// Should have: enqueue, dequeueAny, dequeueDog, dequeueCat.

//----Solution: Using a linked list to make queue
// Simply store all animal into a linked list. So we can easily enqueue and dequeue
// by addTohead and removeTail of the linked list.
// This is similar to a regular queue except they have dequeue with options.
// Therefore, we need to make method remove middle node of the linked list.
// and then when dequeue either dog or cat, we go from the tail to head and
// check each node to see if it is the same type of the dequeue option,
// if it is, remove it from linked list, if not, keep traversing to the head
// until you see the node of that type.
// Time: O(1) for enqueue and dequeueAny
// Time: O(k) for dequeueDog or dequeueCat

function Node(value) {
  this.value = value;
  this.next = undefined;
  this.prev = undefined;
}

function LinkedList() {
  this.head = undefined;
  this.tail = undefined;
}

LinkedList.prototype.addToHead = function(node) {
  if (!this.head && !this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

LinkedList.prototype.removeTail = function() {
  this.tail.prev.next = undefined;
  this.tail = this.tail.prev;
};

LinkedList.prototype.remove = function(node) {
  if (node.next) node.next.prev = node.prev;
  node.prev.next = node.next;
};

LinkedList.prototype.toString = function() {
  let currentNode = this.head;
  let string = '';
  while (currentNode) {
    string += `->${currentNode.value}`;
    currentNode = currentNode.next;
  }
  return string.slice(2);
};

function AnimalShelter() {
  this.queue = new LinkedList();
}

AnimalShelter.prototype.enqueue = function(animal) { // animal is a node
  this.queue.addToHead(animal);
};

AnimalShelter.prototype.dequeueAny = function() {
  this.queue.removeTail();
};

AnimalShelter.prototype.dequeueDog = function() {
  let currentAnimal = this.queue.tail;
  while (currentAnimal) {
    if (currentAnimal.value.slice(0, 3) === 'dog') {
      this.queue.remove(currentAnimal);
      return currentAnimal;
    }
    currentAnimal = currentAnimal.prev;
  }
};

AnimalShelter.prototype.dequeueCat = function() {
  let currentAnimal = this.queue.tail;
  while (currentAnimal) {
    if (currentAnimal.value.slice(0, 3) === 'cat') {
      this.queue.remove(currentAnimal);
      return currentAnimal;
    }
    currentAnimal = currentAnimal.prev;
  }
};

const a = new AnimalShelter();
a.enqueue(new Node('cat1'));
a.enqueue(new Node('cat2'));
a.enqueue(new Node('dog1'));
a.enqueue(new Node('dog2'));
a.enqueue(new Node('dog3'));
a.enqueue(new Node('cat3'));
console.log(a.queue.toString());
a.dequeueAny();
console.log(a.queue.toString());
a.dequeueDog();
console.log(a.queue.toString());
a.enqueue(new Node('cat10'));
console.log(a.queue.toString());
a.dequeueDog();
console.log(a.queue.toString());
