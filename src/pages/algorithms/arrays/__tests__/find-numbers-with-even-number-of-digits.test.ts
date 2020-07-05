import {findNumbersWithEventNumberOfDigits} from '../find-numbers-with-even-number-of-digits'

describe('Find Numbers with Even Number of Digits', () => {
  it('should find numbers with event number of digits', () => {
    return expect(findNumbersWithEventNumberOfDigits([12,345,2,6,789678])).toBe(2)
  })

  it('should return 1 if only one argument is a event number', () => {
    return expect(findNumbersWithEventNumberOfDigits([4242])).toBe(1)
  })

  it('should return 0 if only one argument is a zero', () => {
    return expect(findNumbersWithEventNumberOfDigits([0])).toBe(0)
  })

  it('should return 0 if input array is empty', () => {
    return expect(findNumbersWithEventNumberOfDigits([])).toBe(0)
  })
})
