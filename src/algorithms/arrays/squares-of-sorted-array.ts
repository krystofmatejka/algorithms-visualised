export function squaresOfSortedArray (nums: number[]) {
  let left = 0
  let right = nums.length - 1
  let i = nums.length - 1
  const result: number[] = []

  while (left <= right) {
    const leftSquare = Math.pow(nums[left], 2)
    const rightSquare = Math.pow(nums[right], 2)

    if (leftSquare > rightSquare) {
      result[i] = leftSquare
      left++
    } else {
      result[i] = rightSquare
      right--
    }

    i--
  }

  return result
}
