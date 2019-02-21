// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  insertFirst(record) {
    if (!this.head) {
      this.head = this.tail = new Node(record);
    } else {
      this.head = new Node(record, this.head);
    }
  }
  
  size() {
    let length = 0;
    let curr = this.head;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // return this.tail;
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = this.tail = null;
  }

  removeFirst() {
    const temp = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return temp;
  }

  removeLast() {
    if (!this.head) return null;
    let node = this.head;
    let prev = null;
    while (node.next) { //get us to the tail
      prev = node;
      node = node.next;
    }
    if (!prev) {
      this.head = this.tail = null;
    } else {
      prev.next = null;
      this.tail = prev;
    }
  }

  insertLast(record) {
    if (!this.head) {
      this.head = this.tail = new Node(record);
    } else {
      this.tail.next = new Node(record);
      this.tail = this.tail.next;
      // let node = this.head;
      // while (node.next) {
      //   node = node.next;
      // }
      // this.tail = node.next = new Node(record);
    }
  }

  getAt(idx) {
    let position = 0;
    let node = this.head;
    while (node && position < idx) {
      node = node.next;
      position++;
    }
    if (position === idx) return node;
    return null;
  }

  removeAt(idx) {
    if (!this.head) return null;
    if (idx === 0) {
      return this.head = this.head.next;
    }
    const prev = this.getAt(idx - 1);
    if (prev && prev.next) {
      return prev.next = prev.next.next;
    }
    return null;
    // let position = 0;
    // let node = this.head;
    // while (node && position < idx - 1) {
    //   node = node.next;
    //   position++;
    // }
    // if (position === (idx - 1) && node.next) {
    //   node.next = node.next.next;
    // }
    // return null;
  }

  insertAt(record, idx) {
    if (!this.head) {
      return this.head = this.tail = new Node(record);
    }
    if (idx === 0) {
      return this.head = new Node(record, this.head);
    }

    let prev = this.head;
    let position = 0;
    while (prev && prev.next && position < idx - 1) {
      prev = prev.next;
      position++;
    }
    if (!prev.next) {
      this.tail = prev.next = new Node(record);
    } else {
      prev.next = new Node(record, prev.next);
    }
  }

  forEach(cb) {
    let node = this.head;
    let idx = 0;
    while (node) {
      cb(node, idx);
      node = node.next;
      idx++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
