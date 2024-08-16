import oddInt, { convertToCountMap } from './odd-int'

describe('oddInt function', () => {
  it('function defined', () => {
    expect(oddInt).toBeDefined()
  })

  it('return number in array, which have only 1 number', () => {
    const numbers: number[] = [0]
    const expectedResult: number = 0
    const result = oddInt(numbers)

    expect(result).toEqual(expectedResult)
  })

  it('return number in array, which their frequency is in odd number', () => {
    const numbers: number[] = [0, 0, 1, 1, 1, 1, 2, 1, 0, 0, 2]
    const expectedResult: number = 1
    const result = oddInt(numbers)

    expect(result).toEqual(expectedResult)
  })

  it('throws error, if there is no numbers that have frequency in odd number', () => {
    const numbers: number[] = [0, 0, 1, 1, 1, 2, 1, 0, 0, 2]
    const expectedResult: number = 0
    try {
      const result = oddInt(numbers)
      expect(result).not.toEqual(expectedResult)
    } catch (error) {
      expect(error).toEqual(Error('There is no integer that appears in ood times'))
    }
  })
})

describe('convertToCountMap function', () => {
  it('function defined', () => {
    expect(convertToCountMap).toBeDefined()
  })

  it('return map object which key is number and value is count', () => {
    const numbers: number[] = [1, 1, 2, 2, 2, 3, 3, 3, 3]
    const expectedMap: Map<number, number> = new Map()
      .set(1, 2)
      .set(2, 3)
      .set(3, 4)
    const result = convertToCountMap(numbers)

    expect(result).toEqual(expectedMap)
  })
})
