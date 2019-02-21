// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  if (n <= 0) { return [] };
  let matrix = [];
  for (let i = 0; i < n; i++) matrix.push([]);

  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let counter = 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let top = startCol; top <= endCol; top++) {
      matrix[startRow][top] = counter;
      counter++;
    }
    startRow++;
    for (let right = startRow; right <= endRow; right++) {
      matrix[right][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let bottom = endCol; bottom >= startCol; bottom--) {
      matrix[endRow][bottom] = counter;
      counter++;
    }
    endRow--;
    for (let left = endRow; left >= startRow; left--) {
      matrix[left][startCol] = counter;
      counter++
    }
    startCol++;
  }

  return matrix;
}


module.exports = matrix;
