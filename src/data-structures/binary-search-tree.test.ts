import {BinarySearchTree} from './binary-search-tree'

describe('Binary search tree', () => {
  test('insert', () => {
    const BST = new BinarySearchTree<number, string>()

    BST.insert(8, '8')
    BST.insert(5, '5')
    BST.insert(12, '12')
    BST.insert(3, '3')
    BST.insert(4, '4')
    BST.insert(9, '9')
    BST.insert(25, '25')
    BST.insert(1, '1')

    expect(BST.root).toEqual({
      'key': 8,
      'data': '8',
      'left': {
        'key': 5,
        'data': '5',
        'left': {
          'key': 3,
          'data': '3',
          'left': {
            'key': 1,
            'data': '1',
            'left': null,
            'right': null
          },
          'right': {
            'key': 4,
            'data': '4',
            'left': null,
            'right': null
          }
        },
        'right': null
      },
      'right': {
        'key': 12,
        'data': '12',
        'left': {
          'key': 9,
          'data': '9',
          'left': null,
          'right': null
        },
        'right': {
          'key': 25,
          'data': '25',
          'left': null,
          'right': null
        }
      }
    })
  })

  test('find I', () => {
    const BST = new BinarySearchTree<number, string>()

    BST.insert(8, '8')
    BST.insert(9, '9')
    BST.insert(5, '5')
    BST.insert(12, '12')
    BST.insert(3, '3')
    BST.insert(4, '4')

    expect(BST.find(4)).toEqual({
      key: 4,
      data: '4',
      left: null,
      right: null,
    })
  })

  test('find II', () => {
    const BST = new BinarySearchTree<number, string>()

    BST.insert(8, '8')

    expect(BST.find(4)).toEqual(null)
  })

  test('find III', () => {
    const BST = new BinarySearchTree<number, string>()

    expect(BST.find(4)).toEqual(null)
  })
})
