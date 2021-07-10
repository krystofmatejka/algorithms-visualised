function numberOfDigits (number: number) {
  if (number === 0) {
    return 1
  }
  if (number < 0) {
    number *= -1
  }

  let sum = 0

  while (number >= 1) {
    number = number / 10
    sum++
  }

  return sum
}

export function findNumbersWithEventNumberOfDigits (nums: number[]) {
  let result = 0

  nums.forEach(num => {
    if (numberOfDigits(num) % 2 === 0) {
      result++
    }
  })

  return result
}
