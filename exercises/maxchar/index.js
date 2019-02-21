// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCt = str.split('').reduce((obj, char) => {
    obj[char] = obj[char]++ || 1;
    return obj;
  }, {});
  const resultTuple = Object.entries(charCt).reduce((acc, tuple) => tuple[1] > acc[1] ? tuple : acc,
      ['', 0]);

    return resultTuple[0];
};

// const charMap = {};
// let maxCt = 0;
// let maxChar = '';

// for (let char of str) {
//   charMap[char] = charMap[char]++ || 1;
// }

// for (let char in charMap) {
//   if (charMap[char] > maxCt) {
//     maxCt = charMap[char];
//     maxChar = char;
//   }
// }

// return maxChar;

module.exports = maxChar;
