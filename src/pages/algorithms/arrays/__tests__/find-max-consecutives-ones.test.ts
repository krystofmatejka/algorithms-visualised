import {findMaxConsecutiveOnes} from '../find-max-consecutives-ones'

describe('Max Consecutive Ones', () => {
  it('should find a maximum number of consecutive 1s in array', () => {
    return expect(findMaxConsecutiveOnes([0,1,1,0,1,1,1,0,1,0])).toBe(3)
  })

  it('should return 1 if input array is only a 1', () => {
    return expect(findMaxConsecutiveOnes([1])).toBe(1)
  })

  it('should return 0 if input array is only a 0', () => {
    return expect(findMaxConsecutiveOnes([0])).toBe(0)
  })

  it('should return 0 if input array is empty', () => {
    return expect(findMaxConsecutiveOnes([])).toBe(0)
  })
})
