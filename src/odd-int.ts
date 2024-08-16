export default function oddInt(numbers: number[]): number {
  const countMap: Map<number, number> = convertToCountMap(numbers)

  for (const [key, value] of countMap) {
    if (value % 2 != 0) {
      return +key
    }
  }

  throw new Error('There is no integer that appears in ood times')
}

export function convertToCountMap(numbers: number[]) {
  const countMap: Map<number, number> = new Map()
  for (const number of numbers) {
    const count = countMap.get(number)
    if (!count) {
      countMap.set(number, 1)
    } else {
      countMap.set(number, count + 1)
    }
  }
  return countMap
}
