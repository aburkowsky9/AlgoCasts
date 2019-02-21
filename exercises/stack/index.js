// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

const Node = function(val) {
  this.val = val;
  this.next = null;
}

class Stack {
  constructor() {
    // this.data = data;
    this.top = null;
    this.size = 0;
  }

  push(record) {
    // return this.data.push(record);
    if (!this.top) {
      this.top = new Node(record);
    } else {
      const temp = new Node(record);
      temp.next = this.top;
      this.top = temp;
    }
    this.size++;
  }

  pop() {
    // return this.data.pop();
    const temp = this.top;
    this.top = this.top.next;
    return temp.val;
  }

  peek() {
    // const last = this.data.length - 1;
    // return this.data[last];
    if (this.top) {
      return this.top.val;
    }
    return null;
  }
}

module.exports = Stack;
