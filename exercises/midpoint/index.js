// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  if (!list.head) return null;
  let move1 = move2 = list.head;
  while (move2.next && move2.next.next) {
    move1 = move1.next;
    move2 = move2.next.next;
  }
  return move1;
}

module.exports = midpoint;


// []
// [a]
// [a, b] while next and next.next
// [a, b, c] while next and next.next
// [a, b, c, d] while next and next.next
// [a, b, c, d, e]
// [a, b, c, d, e, f]