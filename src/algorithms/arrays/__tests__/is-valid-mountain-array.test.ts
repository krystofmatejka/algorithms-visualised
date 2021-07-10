import {isValidMountainArray} from '../is-valid-mountain-array'

describe('Is Valid Mountain Array', () => {
  it('', () => {
    expect(isValidMountainArray([0,2,3,4,5,2,1,0])).toBeTruthy()
  })

  it('', () => {
    expect(isValidMountainArray([0,2,3,6,5,2,4,0])).toBeFalsy()
  })

  it('', () => {
    expect(isValidMountainArray([0,1,2,3,4,5,6,7,8,9])).toBeFalsy()
  })

  it('', () => {
    expect(isValidMountainArray([9,8,7,6,5,4,3,2,1,0])).toBeFalsy()
  })

  it('', () => {
    expect(isValidMountainArray([3,5,5,6,2,1])).toBeFalsy()
  })

  it('', () => {
    expect(isValidMountainArray([3,5,5])).toBeFalsy()
  })

  it('', () => {
    expect(isValidMountainArray([0,1,0])).toBeTruthy()
  })

  it('', () => {
    expect(isValidMountainArray([])).toBeFalsy()
  })
})
