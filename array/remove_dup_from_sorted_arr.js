// Given a sorted array, remove the duplicates in-place such that
// each element appear only once and return the new length.
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

var shifting = function(nums, length, i, j) {
  for (; j < length; i++, j++) {
      nums[i] = nums[j];
  }
};

var removeDuplicates = function(nums) {
  let length = nums.length;
  let i = 0;
  while (i < length - 1) {
    if ( nums[i] === nums[i+1] ) {
      let j = i + 1;
      while ( nums[j] === nums[i]) j++;
      shifting(nums, length, i+1, j);
      length = length - ( j - i ) + 1;
      console.log(length);
    }
    i++;
  }
  return length;
};

let arr = [1,1,2];
// i= 1
// j= 2
let length = removeDuplicates(arr);
console.log(arr.slice(0, length));

let arr2 = [-1,0,0,0,0,3,3];
let length2 = removeDuplicates(arr2);
console.log(arr2.slice(0, length2));
