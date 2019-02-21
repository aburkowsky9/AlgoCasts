// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root) return [];
  const result = [];
  const stop = 'stop';
  const queue = [root, stop];
  let levelCt = 0;
  while (queue.length) {
    const node = queue.shift();
    if (node === stop) {
      result.push(levelCt);
      if (!queue.length) return result;
      levelCt = 0;
      queue.push(stop);
    } else {
      levelCt++;
      queue.push(...node.children);
    }
  }
  // const map = {};
  // const helper = (queue, level) => {
  //   if (!queue.length) return;
  //   map[level] = queue.length + (map[level] || 0);
  //   queue.forEach(node => {
  //     if (node.children) {
  //       helper(node.children, level + 1)
  //     }
  //   })
  // };
  // helper([root], 0);
  // return Object.values(map);
}

module.exports = levelWidth;
