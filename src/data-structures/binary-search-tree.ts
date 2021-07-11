class Node<A, B> {
  public left:  Node<A, B> | null = null
  public right:  Node<A, B> | null = null

  constructor(
    public key: A,
    public data: B,
  ) {}
}

export class BinarySearchTree<A, B> {
  public root: Node<A, B> | null = null

  insert (key: A, data: B) {
    const node = new Node(key, data)

    if (!this.root) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  private insertNode(node: Node<A, B>, newNode: Node<A, B>) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  find (key: A) {
    return this.findNode(key, this.root)
  }

  private findNode (key: A, node: Node<A, B> | null) {
    if (!node) {
      return null
    }

    if (key < node.key) {
      return this.findNode(key, node.left)
    } else if (key > node.key) {
      return this.findNode(key, node.right)
    } else {
      return node
    }
  }
}
