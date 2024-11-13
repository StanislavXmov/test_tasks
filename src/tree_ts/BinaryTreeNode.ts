export class BinaryTreeNode {
  parent: BinaryTreeNode | null;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
  value: number;

  constructor(value: number, parent: BinaryTreeNode | null) {
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.value = value;
  }

  findNode(value: number){
    let node: BinaryTreeNode | null = this;
    while (node) {
      if (value == node.value) {
        return node;
      } else if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      }
    }

    return null;
  }

  insertNode(value: number){
    return this.#insertNode(value, this)
  }

  #insertNode(value: number, parentNode: BinaryTreeNode){
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

