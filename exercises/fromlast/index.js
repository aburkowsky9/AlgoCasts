// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let follow = lead = list.head;
  while (lead && n > 0) {
    lead = lead.next;
    n--;
  }
  if (!lead) return null;

  while (lead.next) {
    follow = follow.next;
    lead = lead.next;
  }
  return follow;
}

module.exports = fromLast;

//[a, b1, c, d2, null]// while 2.next
//[a, b1, c, d, e2, null]