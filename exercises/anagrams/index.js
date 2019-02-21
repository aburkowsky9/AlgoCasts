// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return sortStr(stringA) === sortStr(stringB);
}

function sortStr(str) {
  const regex = /\W/g
  return str.replace(regex, '').toLowerCase().split('').sort().join('');
}

  // if (stringA.length !== stringB.length) {
  //   return false;
  // }


  // const mapA = createCharMap(stringA);
  // const mapB = createCharMap(stringB);
  // const keysA = Object.keys(mapA);
  // if (keysA.length !== Object.keys(mapB).length) {
  //   return false;
  // }

  // return keysA.every((char) => mapA[char] === mapB[char]);

// function createCharMap(str) {
//   const map = {};
//   for (let char of str) {
//     map[char] = map[char]++ || 1;
//   }
//   return map;
// }

module.exports = anagrams;
