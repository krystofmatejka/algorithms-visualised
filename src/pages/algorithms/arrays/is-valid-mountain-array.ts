export function isValidMountainArray (nums: number[]) {
  if (nums.length < 3) {
    return false
  }

  let isAfterClimax = false

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i]
    const next = nums[i + 1]

    if (i > 0 && !isAfterClimax && next < current) {
      isAfterClimax = true
    }

    if (isAfterClimax && next >= current) {
      return false
    }

    if (!isAfterClimax && next <= current) {
      return false
    }
  }

  return isAfterClimax
}
