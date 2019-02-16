import Node from "./node.js";

export default class Tree {
  constructor(node = null) {
    this.root = node;
  }
  traverse(cb) {
    this.root.visit(cb, this.root);
  }
  search(target) {
    return this.root.search(target);
  }
  addValue(n) {
    let node = new Node(n);
    if (this.root === null) {
      this.root = node;
      this.root.x = window.innerWidth / 2;
      this.root.y = 100;
    } else {
      this.root.addNode(node);
    }
  }
}
