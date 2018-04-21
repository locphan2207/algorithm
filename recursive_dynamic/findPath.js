// Imagine there is a robot sitting on the upper left corner of grid with r rows and c columns.
// THe robot can only move in 2 directions, right and down.
// THere are cells that robot cannot step on them.
// Find all the paths the robot can go to get to the bottom right of the grid.

// ----Solution:
// Same idea as the stair hopping problem. We store all the previous result (
// or result of adjacent cells) then add one more step to them.
// For this problem, each cell has two previous result, one from the top cell,
// one from the left cell, we have to add step to both, then combine them together.
// Start from the destination, we look at the adjecency cell results
// and add one more step to them, then combine all into one and store them in hash

function findPath(row, col, result = {'00': ['0,0']} ) {
  if (row === 0 && col === 0) return result[`${row}${col}`];
  if (result[`${row}${col}`]) return result[`${row}${col}`];

  let topPath = [];
  let leftPath = [];
  if (row-1 >= 0) {
    if (!result[`${row-1}${col}`]) {
      result[`${row-1}${col}`] = findPath(row-1, col, result);
    }
    result[`${row-1}${col}`].forEach(path => {
      topPath.push(path + `->${row},${col}`);
    });
  }
  if (col-1 >= 0) {
    if (!result[`${row}${col-1}`]) {
      result[`${row}${col-1}`] = findPath(row, col-1, result);
    }
    result[`${row}${col-1}`].forEach(path => {
      leftPath.push(path + `->${row},${col}`);
    });
  }
  result[`${row}${col}`] = topPath.concat(leftPath);
  return result[`${row}${col}`];
}

console.log(findPath(1,1));
console.log(findPath(2,2));
console.log(findPath(3,3));
