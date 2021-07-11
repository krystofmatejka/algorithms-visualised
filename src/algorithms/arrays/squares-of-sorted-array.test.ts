import {squaresOfSortedArray} from './squares-of-sorted-array'

describe('Squares of a Sorted Array', () => {
  it('should calculate a squares of sorted array', () => {
    return expect(squaresOfSortedArray([-4,-1,0,3,10])).toEqual([0,1,9,16,100])
  })
})
