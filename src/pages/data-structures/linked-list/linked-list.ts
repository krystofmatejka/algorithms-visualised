export class LinkedListNode<T> {
  public value: T
  public next?: LinkedListNode<T>

  constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value
    this.next = next
  }

  toString = () => String(this.value)
}

export class LinkedListStructure<T> {
  public head: LinkedListNode<T>
  public tail: LinkedListNode<T>

  append = (value: T) => {
    const node = new LinkedListNode(value)

    if (this.tail) {
      this.tail.next = node
    }

    this.tail = node

    if (!this.head) {
      this.head = node
    }

    return node
  }

  prepend = (value: T) => {
    const node = new LinkedListNode(value, this.head)
    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    return node
  }

  find = (value: T) => {
    let node = this.head

    while (node && node.value !== value) {
      node = node.next
    }

    return node
  }

  toArray = () => {
    const result = []
    let node = this.head

    while (node) {
      result.push(node)
      node = node.next
    }

    return result
  }
}
