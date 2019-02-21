// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data = null) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

  insert(data, currNode = this) {
    // if (!currNode.data) {
    //   return currNode.data = data;
    // };

    // if (data < currNode.data) {
    //   if (!currNode.left) {
    //     return currNode.left = new Node(data);
    //   }
    //   this.insert(data, currNode.left);
    // } else if (data > currNode.data) {
    //   if (!currNode.right) {
    //     return currNode.right = new Node(data);
    //   }
    //   this.insert(data, currNode.right);
    // } else {
    //   return;
    // }
    if (!this.data) {
      return this.data = data;
    };
    let node = this;
    while (data !== node.data) {
      if (data < node.data) {
        if (!node.left) {
          return node.left = new Node(data);
        }
        node = node.left;
      } else {
        if (!node.right) {
          return node.right = new Node(data);
        }
        node = node.right;
      }
    } 
  }

  contains(data) {
    if (!this.data) return null;
    let node = this;
    while (node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }
}

module.exports = Node;
