// Given a image represented by 2x2 array of colors.
// Implement a paint fill function. A function will have 2 args: a point,
// and a new color.

// ----Solution:
// Simply change current cell at given point to new color.
// Then, look at adjacency cells, to see if they have same color as the old color,
// If yes, we recursively call the function on those cells.

function paintFill(image, point, newColor, oldColor) {
  if (!oldColor) oldColor = image[point[0]][point[1]];
  image[point[0]][point[1]] = newColor;
  if (image[point[0]-1] && image[point[0]-1][point[1]] === oldColor) paintFill(image, [point[0]-1, point[1]], newColor, oldColor);
  if (image[point[0]+1] && image[point[0]+1][point[1]] === oldColor) paintFill(image, [point[0]+1, point[1]], newColor, oldColor);
  if (image[point[0]][point[1]-1] === oldColor) paintFill(image, [point[0], point[1]-1], newColor, oldColor);
  if (image[point[0]][point[1]+1] === oldColor) paintFill(image, [point[0], point[1]+1], newColor, oldColor);
}

const image = [
  [1,3,4,5,6],
  [2,3,3,5,6],
  [3,3,1,5,6],
  [0,3,3,3,6],
  [1,3,9,5,6],
  [1,3,3,3,3],
];

paintFill(image, [3,1], 0);
paintFill(image, [1,1], 1);
paintFill(image, [1,1], 5);
paintFill(image, [1,1], 6);
paintFill(image, [1,1], 4);
paintFill(image, [1,1], 2);
paintFill(image, [1,1], 9);
console.log(image);
