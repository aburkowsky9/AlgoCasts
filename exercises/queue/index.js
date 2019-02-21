// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

const Node = function(val) {
  this.val = val;
  this.next = null;
}

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }
  
  add(record) {
    const newNode = new Node(record);
    if (!this.first) {
      this.first = newNode;
    } else {
      let node = this.first;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
    this.size++;
    return newNode;
  }
  
  remove() {
    if (this.first) {
      const nodeToDelete = this.first;
      this.first = this.first.next;
      this.size--;
      return nodeToDelete.val;
    }
    return undefined;
  }
}

// class Queue {
//   constructor(data = []) {
//     this.data = data;
//   }
  
//   add(record) {
//     this.data.unshift(record);
//   }
  
//   remove(record) {
//     return this.data.pop();
//   }
// }

module.exports = Queue;
