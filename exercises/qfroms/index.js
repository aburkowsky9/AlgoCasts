// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.reserve = new Stack();
  }

  add(record) {
    if (this.first.peek() === undefined) {
      this.first.push(record);
    } else if (this.reserve.peek() === undefined) {
      this.reserve.push(record);
    } else {
      const temp = this.first.pop();
      while (this.reserve.peek()){
        this.first.push(this.reserve.pop());
      }
      this.reserve.push(record);
      while (this.first.peek()) {
        this.reserve.push(this.first.pop());
      }
      this.first.push(temp);
    }
  }

  remove() {
    const temp = this.first.pop();
    const tempRes = this.reserve.pop();
    if (tempRes !== undefined)
    this.first.push(tempRes);
    return temp;
  }

  peek() {
    return this.first.peek();
  }
}

module.exports = Queue;
