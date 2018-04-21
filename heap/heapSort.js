// Implement heap sort without creating a heap class

// This is NOT in-place solution:
function heapSort(array) {
  // Heapify the array to become Min Heap:
  const minHeap = heapify(array);
  const result = [];
  while (minHeap.length > 0) {
    result.push(extract(minHeap));
  }
  return result;
}

function heapify(array) {
  const minHeap = [];
  for (let i = 0; i < array.length; i++) {
    insert(minHeap, array[i]);
  }
  return minHeap;
}

function insert(minHeap, number) {
  minHeap.push(number);
  heapifyUp(minHeap);
}

function extract(minHeap) {
  const deletingNumber = minHeap[0];
  minHeap[0] = minHeap[minHeap.length - 1];
  minHeap.pop();
  heapifyDown(minHeap);
  return deletingNumber;
}

function heapifyUp(minHeap) {
  let currentIdx = minHeap.length - 1;
  let parentIdx = Math.floor((currentIdx-1)/2);
  while (currentIdx !== 0 && minHeap[parentIdx] > minHeap[currentIdx]) {
    [minHeap[parentIdx], minHeap[currentIdx]] = [minHeap[currentIdx], minHeap[parentIdx]];
    currentIdx = parentIdx;
    parentIdx = Math.floor((currentIdx-1)/2);
  }
}

function heapifyDown(minHeap) {
  let currentIdx = 0;
  let childIdx = findSmallestChildIdx(minHeap, currentIdx);
  while (childIdx && minHeap[currentIdx] > minHeap[childIdx]) {
    [minHeap[currentIdx], minHeap[childIdx]] = [minHeap[childIdx], minHeap[currentIdx]];
    currentIdx = childIdx;
    childIdx = findSmallestChildIdx(minHeap, currentIdx);
  }
}

function findSmallestChildIdx(minHeap, currentIdx) {
  const idx1 = 2*currentIdx + 1;
  const idx2 = 2*currentIdx + 2;
  if (!minHeap[idx1] && !minHeap[idx2]) return undefined;
  if (minHeap[idx1] && minHeap[idx2]) {
    if (minHeap[idx1] < minHeap[idx2]) return idx1;
    else return idx2;
  }
  if (minHeap[idx1]) return idx1;
  else return idx2;
}

const a = [1,2,10,9,6,3,4,5,7,8];
console.log(heapSort(a));
