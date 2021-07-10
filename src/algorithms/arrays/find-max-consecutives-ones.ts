type binary = 0|1

export function findMaxConsecutiveOnes (nums: binary[]) {
  let biggestSequence = 0
  let currentSequence = 0

  nums.forEach(num => {
    if (num === 1) {
      currentSequence++
    } else if (num === 0) {
      currentSequence = 0
    }

    if (currentSequence > biggestSequence) {
      biggestSequence = currentSequence
    }
  })

  return biggestSequence
}
