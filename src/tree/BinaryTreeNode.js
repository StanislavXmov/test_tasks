export class BinaryTreeNode {
  constructor(value, parent) {
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.value = value;
  }

  findNode(value){
    let node = this;
    while (node){
      if (value == node.value) {
        return node;
      }
      if (value < node.value) {
        node = node.left;
      }
      if (value > node.value) {
        node = node.right;
      }
    }

    return null;
  }

  insertNode(value){
    return this.#insertNode(value, this)
  }

  #insertNode(value, parentNode){
    if (value < parentNode.value){
      if (parentNode.left == null){
        parentNode.left = new BinaryTreeNode(value, parentNode);
      } else {
        this.#insertNode(value, parentNode.left);
      }
    }
    if (value > parentNode.value){
      if (parentNode.right == null){
        parentNode.right = new BinaryTreeNode(value, parentNode);
      } else {
        this.#insertNode(value, parentNode.right);
      }
    }
  }
}

