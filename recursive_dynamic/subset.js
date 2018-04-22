// Find all subsets of a given array.

// ----Observation:
// Subsets of [1,2,3] are subsets of [1,2] with subsets of[1,2] add 3 into each
// For example:
// Array -> subsets:
// [] -> [ [] ]
// [1] -> [ [], [ 1 ] ]
// [1,2] -> [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]
// [1,2,3] -> [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]

function subset(array) {
  if (array.length < 1) return [[]];
  const prevSubsets = subset(array.slice(0, array.length-1));
  const newSubsets = prevSubsets.map(sub => sub.concat([array[array.length-1]]));
  return prevSubsets.concat(newSubsets);
}

console.log(subset([]));
console.log(subset([1]));
console.log(subset([1,2]));
console.log(subset([1,2,3]));
console.log(subset([1,2,3,4,5]));
