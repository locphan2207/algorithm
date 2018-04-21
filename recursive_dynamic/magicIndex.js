// A magic index in an array is defined to be index i such that
// A[i] = i.
// Given a sorted array of distanct integers.
// Write a method to find a magic index if one exists.

// ----SOlution: Similar to Binary search
// Because we know that the array is sorted and distinct,
// we can easily get rid of half of an array if:
// middle element is not equal to that middle index
// If middle element < middle index, we can assume left side will never have
// magic index, so we only check right side. And vice versa.
// Make sure you parse the offset index down to the recursive call, since
// after we slice the array, the index will be different on the right side array.
// Time: O(logn)

function magicIndex(array, offset = 0) {
  if (array.length < 1) return undefined;
  const midIdx = Math.floor(array.length/2);
  if (array[midIdx] === midIdx + offset) return midIdx;
  if (array[midIdx] > midIdx + offset) {
    return magicIndex(array.slice(0, midIdx));
  }
  console.log(array.slice(midIdx+1));
  const rightResult = magicIndex(array.slice(midIdx+1), midIdx + 1 + offset);
  return rightResult ? rightResult + midIdx + 1 : undefined;
}

// console.log(magicIndex([1,2,4]));
// console.log(magicIndex([0,2,4]));
console.log(magicIndex([-10,-2,-1,0,1,2,3,4,5,6,7,8,9,13]));
