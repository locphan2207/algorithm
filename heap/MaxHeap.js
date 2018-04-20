// Implement a MAX heap

function MaxHeap(array = []) {
  this.array = array;
}

MaxHeap.prototype.heapifyUp = function() {
  let currentIdx = this.array.length - 1; // last index of array
  let parentIdx = Math.floor((currentIdx - 1)/2);
  while (currentIdx !== 0 && this.array[currentIdx] > this.array[parentIdx]) {
    [this.array[currentIdx], this.array[parentIdx]] = [this.array[parentIdx], this.array[currentIdx]];
    currentIdx = parentIdx;
    parentIdx = Math.floor((currentIdx - 1)/2);
  }
};

MaxHeap.prototype.findBiggestChildIdx = function(currentIdx) {
  const idx1 = 2 * currentIdx + 1;
  const idx2 = 2 * currentIdx + 2;
  if (!this.array[idx1] && !this.array[idx2]) return undefined; // no child idx
  if (this.array[idx1] && this.array[idx2]) {
    if (this.array[idx1] > this.array[idx2]) return idx1;
    else return idx2;
  }
  if (this.array[idx1]) return idx1;
  if (this.array[idx2]) return idx2;
};

MaxHeap.prototype.heapifyDown = function() {
  let currentIdx = 0;
  let biggestChildIdx = this.findBiggestChildIdx(currentIdx);
  while (biggestChildIdx && this.array[currentIdx] < this.array[biggestChildIdx]) {
    [this.array[currentIdx], this.array[biggestChildIdx]] = [this.array[biggestChildIdx], this.array[currentIdx]];
    currentIdx = biggestChildIdx;
    biggestChildIdx = this.findBiggestChildIdx(currentIdx);
  }
};

MaxHeap.prototype.insert = function(number) {
  this.array.push(number);
  this.heapifyUp();
};

MaxHeap.prototype.extract = function() {
  const deletingNumber = this.array[0];
  // Swap root with last element:
  [this.array[0], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[0]];
  // Extract the deleting number after swapping:
  this.array.pop();
  this.heapifyDown();
  return deletingNumber;
};

const a = new MaxHeap();

a.insert(3);
a.insert(10);
a.insert(2);
a.insert(4);
a.insert(6);
a.insert(90);
console.log(a.array);
a.extract();
console.log(a.array);
