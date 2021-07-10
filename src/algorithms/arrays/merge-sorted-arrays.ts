export function mergeSortedArrays (left: number[], right: number[]) {
  const result: number[] = []
  let li = 0
  let ri = 0

  while (result.length < left.length + right.length) {
    if (left[li] < right[ri] || ri >= right.length) {
      result.push(left[li])
      li++
    } else {
      result.push(right[ri])
      ri++
    }
  }

  return result
}
