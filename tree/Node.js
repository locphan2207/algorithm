function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

Node.prototype.inOrder = function(cb) {
  // if (!this.left && !this.right) cb(this.value);
  if (this.left) this.left.inOrder(cb);
  cb(this);
  if (this.right) this.right.inOrder(cb);
};

Node.prototype.printTreeInOrder = function() {
  this.inOrder(node => console.log(node));
};
//
// const a = new Node(4);
// const b = new Node(5);
// const c = new Node(6,a,b);
//
// c.printTreeInOrder();

module.exports = Node;
