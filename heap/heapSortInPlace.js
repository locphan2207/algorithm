// Implement heapsort in place.

function heapSort(array) {
  heapify(array);
  extract(array);
  return array;
}

function heapify(array) {
  for (let i = 0; i < array.length; i++) {
    heapifyUp(array, i);
  }
}

function heapifyUp(array, lastIdx) {
  let currentIdx = lastIdx;
  let parentIdx = Math.floor((lastIdx-1)/2);
  while (currentIdx !== 0 && array[currentIdx] > array[parentIdx]) {
    [array[currentIdx], array[parentIdx]] = [array[parentIdx], array[currentIdx]];
    console.log(array);
    currentIdx = parentIdx;
    parentIdx = Math.floor((lastIdx-1)/2);
  }
}

function extract(array) {
  let lastIdx = array.length - 1;
  while (lastIdx > 0) {
    [array[0], array[lastIdx]] = [array[lastIdx], array[0]];
    lastIdx--;
    heapifyDown(array, lastIdx);
  }
}

function heapifyDown(array, lastIdx) {
  let currentIdx = 0;
  let childIdx = findBiggestChildIdx(array, currentIdx, lastIdx);
  while (childIdx && array[currentIdx] < array[childIdx]) {
    [array[currentIdx], array[childIdx]] = [array[childIdx], array[currentIdx]];
    currentIdx = childIdx;
    childIdx = findBiggestChildIdx(array, currentIdx, lastIdx);
  }
}

function findBiggestChildIdx(array, currentIdx, lastIdx) {
  let idx1 = 2*currentIdx+1;
  let idx2 = 2*currentIdx+2;
  if (idx1 > lastIdx && idx2 > lastIdx) return undefined;
  if (idx1 <= lastIdx && idx2 <= lastIdx) {
    if (array[idx1] > array[idx2]) return idx1;
    else return idx2;
  }
  if (idx1 <= lastIdx) return idx1;
  else return idx2;
}

// const a = [1,2,3,2,9,6,10,3,4,5,7,8];
const a = [1,3,3,2,4];
heapSort(a);
console.log(a);
