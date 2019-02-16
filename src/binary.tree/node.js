export default class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  visit(callback = null, parent) {
    if (this.left !== null) {
      this.left.visit(callback, this);
    }
    callback(this, parent);
    if (this.right !== null) {
      this.right.visit(callback, this);
    }
  }
  search(val) {
    let node = null;
    if (this.value === val) {
      return this;
    }
    if (val < this.value && this.left !== null) {
      node = this.left.search(val);
    } else if (val > this.value && this.right !== null) {
      node = this.right.search(val);
    }
    return node;
  }
  addNode(node) {
    if (this === node) {
      return;
    }
    if (this.value > node.value) {
      if (this.left === null) {
        this.left = node;
        this.left.x = this.x - 50;
        this.left.y = this.y + 30;
      } else {
        this.left.addNode(node);
      }
    } else {
      if (this.right === null) {
        this.right = node;
        this.right.x = this.x + 50;
        this.right.y = this.y + 30;
      } else {
        this.right.addNode(node);
      }
    }
  }
}
