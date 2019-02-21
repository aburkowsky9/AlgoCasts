// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // const reverseArrToString = (reversedStr, char) => char + reversedStr;
  // return str.split('').reduce(reverseArrToString, '');
  return str.split('').reduce((rev, char) => char + rev, '');
}

  /* return str.split('') 
            .reverse()
            .join(''); */

  /* let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result; */
module.exports = reverse;
