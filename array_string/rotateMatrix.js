// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes
// write a method to rotate the image by 90 degrees. Try to do it in-place

// Solution:
// We have to rotate outer layer then inner layer
// ex:
// 1 2 3 4
// 5 6 7 8
// a b c d
// e f g h

// e 2 3 1
// 5 6 7 8
// a b c d
// h f g 4

//....

function rotateMatrix(matrix) {
  let currentLayer = 0;
  let maxLayer = Math.floor(matrix.length/2);
  let layerSize = matrix.length;
  while (currentLayer < maxLayer) {
    for (let i = 0; i < layerSize-1; i++) {
      let temp = matrix[currentLayer][currentLayer + i];
      matrix[currentLayer][currentLayer + i] = matrix[layerSize - 1 - i + currentLayer][currentLayer];
      matrix[layerSize - 1 - i + currentLayer][currentLayer] = matrix[layerSize - 1 + currentLayer][layerSize - 1 - i + currentLayer];
      matrix[layerSize - 1 + currentLayer][layerSize - 1 - i + currentLayer] = matrix[currentLayer + i][layerSize - 1 + currentLayer];
      matrix[currentLayer + i][layerSize - 1 + currentLayer] = temp;
    }
    currentLayer++;
    layerSize = Math.floor(layerSize / 2);
  }
  return matrix;
}

const mat1 = [
  [1,2,3,4],
  [5,6,7,8],
  ['a','b','c','d'],
  ['e','f','g','h']
];
const mat2 = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  ['a','b','c','d','e'],
  ['f','g','h','i','j'],
  ['k','l','m','n','o']
];
console.log(rotateMatrix(mat1));
console.log(rotateMatrix(mat2));

// 9 4 7
// 8 5 2
// 3 6 1
