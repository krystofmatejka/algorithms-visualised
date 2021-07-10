export function checkIfNHasDouble (nums: number[]) {
  const set = new Set()

  for (let n of nums) {
    if(set.has(n * 2) || (n % 2 === 0 && set.has(n / 2))) {
      return true
    }
    set.add(n)
  }

  return false
}
