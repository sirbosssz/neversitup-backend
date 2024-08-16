import { factorial } from 'mathjs'
import shuffleString from './manipulate'

describe('shuffleString function', () => {
  it('function defined', () => {
    shuffleString('aabb')
    expect(shuffleString).toBeDefined()
  })

  it('returns all posible shuffle string, with size of n!, in case of no duplicates', () => {
    const inputWord = 'abc'
    const expectedSize = factorial(inputWord.length)

    const result = shuffleString(inputWord)
    
    expect(result.length).toEqual(expectedSize)
  })

  it('returns all posible shuffle string, and delete duplicates', () => {
    const inputWord = 'aabb'
    const expectedSize = factorial(inputWord.length - 1)

    const result = shuffleString(inputWord)
    
    expect(result.length).toEqual(expectedSize)
  })
})
