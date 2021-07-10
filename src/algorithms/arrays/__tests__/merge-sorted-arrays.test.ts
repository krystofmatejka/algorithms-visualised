import {mergeSortedArrays} from '../merge-sorted-arrays'

describe('Merge Sorted Arrays', () => {
  it('should merge consecutive arrays', () => {
    return expect(mergeSortedArrays([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
  })

  it('should merge even and odd arrays', () => {
    return expect(mergeSortedArrays([0,2,4,6,8], [1,3,5])).toEqual([0,1,2,3,4,5,6,8])
  })

  it('should merge even and odd arrays 2', () => {
    return expect(mergeSortedArrays([1,3,5], [0,2,4,6,8])).toEqual([0,1,2,3,4,5,6,8])
  })

  it('should merge randomly sorted', () => {
    return expect(mergeSortedArrays([1,5,10], [0,3,5,12,13,20])).toEqual([0,1,3,5,5,10,12,13,20])
  })

  it('should merge empty arrays', () => {
    return expect(mergeSortedArrays([], [])).toEqual([])
  })
})
