// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) { // [-4, -3, 0, 1, 1, 2]
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) { // [-8, 7, 0, 5, 4]
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j; 
      }
    }
    if (minIdx !== i) {
      const higherVal = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = higherVal;
    }
  }
  return arr;
}
// l[0, 97] [-30, 22]


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midpt = Math.floor((arr.length) / 2);
  const left = mergeSort(arr.slice(0, midpt));
  const right = mergeSort(arr.slice(midpt));
  return merge(left, right);
}
// return merge(arr.slice(0, midpt), arr.slice(midpt));

function merge(left, right, result = []) {
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
  }
  return [...result, ...left, ...right]; // either left or right has no elements remaining
}
  // const midpt = arr => Math.floor((arr.length) / 2);
  // let sortLeft;
  // let sortRight;
  // if (left.length === 1) {
  //   sortLeft = left;
  // } else {
  //   const midLeft = midpt(left);
  //   sortLeft = merge(left.slice(0, midLeft), left.slice(midLeft));
  // }

  // if (right.length === 1) {
  //   sortRight = right;
  // } else {
  //   const midRight = midpt(right);
  //   sortRight = merge(right.slice(0, midRight), right.slice(midRight));
  // }

  // while (sortLeft.length && sortRight.length) {
  //   if (sortLeft[0] <= sortRight[0]) {
  //     result.push(sortLeft.shift());
  //   } else {
  //     result.push(sortRight.shift());
  //   }
  // }

  // if (sortLeft.length) result = result.concat(sortLeft);
  // if (sortRight.length) result = result.concat(sortRight);
  // return result;



module.exports = { bubbleSort, selectionSort, mergeSort, merge };
