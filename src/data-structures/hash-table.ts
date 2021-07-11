const sumCharCodes = (text: string) => {
  let sum = 0
  for (let i = 0, length = text.length; i < length; i++) {
    sum += text.charCodeAt(i)
  }
  return sum
}

const hash = (key: string, allocatedSize: number) => sumCharCodes(key) % allocatedSize

export class HashTable<T> {
  private readonly SIZE = 100
  private buckets: T[] = new Array(this.SIZE).fill(undefined)

  set = (key: string, value: T) => {
    const hash = this.calculateHash(key)
    this.buckets[hash] = value
  }

  get = (key: string) => {
    const hash = this.calculateHash(key)
    return this.buckets[hash]
  }

  delete = (key: string) => {
    const hash = this.calculateHash(key)
    this.buckets[hash] = undefined
  }

  private calculateHash = (key: string) => hash(key, this.SIZE)
}
