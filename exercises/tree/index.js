// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }

  add(childData) {
    this.children.push(new Node(childData));
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(cb, queue = [this.root]) {
    if (!this.root) return;
    while (queue.length) {
      const node = queue.shift();
      cb(node);
      if (node.children) {
        // queue = queue.concat(node.children);
        queue.push(...node.children);
      }
    }
    
    /*
    if (!this.root || !queue.length) { // recursive
      return;
    }
    let children = [];
    queue.forEach(node => {
      cb(node);
      if (node.children.length) {
        children = children.concat(node.children);
      }
    });
    this.traverseBF(cb, children);
    */
  }

  traverseDF(cb, nodes = [this.root]) {
    if (!this.root || !nodes.length) return;
    while (nodes.length) {
      const node = nodes.shift();
      cb (node);
      if (node.children) {
        nodes = node.children.concat(nodes);
      }
    }
    // nodes.forEach(node => {
    //   cb(node);
    //   if (node.children) {
    //     this.traverseDF(cb, node.children);
    //   }
    // })
  }
}

module.exports = { Tree, Node };
