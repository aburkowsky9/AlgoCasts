// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  if (n === 0) {
    return '';
  }
  const rowLength = 1 + (n - 1) * 2;
  let pad = (rowLength - 1) / 2;
  const arr = new Array(rowLength);

  for (let i = 1; i <= n; i++) {
    arr.fill(' ', 0, pad);
    arr.fill('#', pad, rowLength - pad);
    arr.fill(' ', rowLength - pad);
    console.log(arr.join(''));
    pad -= 1;
  }
  // const printPyramid = (pad) => {
  //   if (pad === 0) {
  //     arr.fill('#');
  //     return console.log(arr.join(''));
  //   } else {
  //     arr.fill(' ', 0, pad);
  //     arr.fill('#', pad, rowLength - pad);
  //     arr.fill(' ', rowLength - pad);
  //     console.log(arr.join(''));
  //     printPyramid(pad - 1);
  //     return;
  //   }
  // }
  // printPyramid(pad1);
}

module.exports = pyramid;
