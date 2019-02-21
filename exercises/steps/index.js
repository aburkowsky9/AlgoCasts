// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let step = new Array(n);
  for (let i = 0; i < n; i++) {
    step.fill('#', 0, i + 1);
    step.fill(' ', i + 1, n + 1);
    console.log(step.join(''));
  }
}

  // O(n^2)
  // for (let i = 1; i <= n; i++) {
  //   let str = '';
  //   let j = 0;
  //   while (j < i) {
  //     str += '#';
  //     j++;
  //   }
  //   while (str.length < n) {
  //     str += ' ';
  //   }
  //   console.log(str)
  // }


  // const helper = (row) => {
  //   if (row === n) {
  //     return;
  //   } else {
  //     let str = '';
  //     for (let i = 0; i < n; i++) {
  //       if (i <= row) {
  //         str += '#'
  //       } else {
  //         str += ' ';
  //       }
  //     }
  //     console.log(str);
  //     helper(row + 1);
  //   }
  // };
  // helper(0);
module.exports = steps;
