import {checkIfNHasDouble} from '../check-if-n-has-double'

describe('Check if N has double', () => {
  it('', () => {
    return expect(checkIfNHasDouble([10,2,3,5,8])).toBeTruthy()
  })

  it('', () => {
    return expect(checkIfNHasDouble([1,3,5,7,8,11,13,17,19,23])).toBeFalsy()
  })

  it('', () => {
    return expect(checkIfNHasDouble([1,2])).toBeTruthy()
  })

  it('', () => {
    return expect(checkIfNHasDouble([1])).toBeFalsy()
  })

  it('', () => {
    return expect(checkIfNHasDouble([0])).toBeFalsy()
  })

  it('', () => {
    return expect(checkIfNHasDouble([0,0])).toBeTruthy()
  })

  it('', () => {
    return expect(checkIfNHasDouble([])).toBeFalsy()
  })
})
