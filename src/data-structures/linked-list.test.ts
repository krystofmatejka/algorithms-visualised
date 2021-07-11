import {LinkedList} from './linked-list'

describe('Linked list', () => {
  test('', () => {
    const linkedList = new LinkedList<number>()

    linkedList.append(6)
    linkedList.append(5)
    linkedList.prepend(50)
    linkedList.append(1)

    expect(linkedList.toArray()).toEqual([50, 6, 5, 1])
  })
})
