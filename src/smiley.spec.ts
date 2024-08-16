import countSmiley from './smiley'

describe('countSmiley', () => {
  it('function defined', () => {
    expect(countSmiley).toBeDefined()
  })

  it('returns 0, when count an empty array', () => {
    const faces: string[] = []
    const result = countSmiley(faces)
    const expectResult = 0

    expect(result).toBe(expectResult)
  })

  it('handle faces, return count of faces if their size is correct', () => {
    const incorrectFaces: string[] = [':--)']
    const correctFaces: string[] = [':)', ':-)']
    const faces: string[] = [...incorrectFaces, ...correctFaces]
    const result = countSmiley(faces)
    const expectResult = 2

    expect(result).toBe(expectResult)
  })

  it('handle pair of eyes, return count of face that have valid eyes when other parts correct', () => {
    const incorrectFaces: string[] = ['|)', 'I)']
    const correctFaces: string[] = [':)', ':-)', ';)']
    const faces: string[] = [...incorrectFaces, ...correctFaces]

    const result = countSmiley(faces)
    const expectResult = 3

    expect(result).toBe(expectResult)
  })

  it('handle nose, return count of face that have valid nose and without nose when other parts correct', () => {
    const incorrectFaces: string[] = [':=)', ':+)']
    const correctFaces: string[] = [':)', ':-)', ':~)']
    const faces: string[] = [...incorrectFaces, ...correctFaces]

    const result = countSmiley(faces)
    const expectResult = 3

    expect(result).toBe(expectResult)
  })

  it('handle mouth, return count of face that have valid mouth when other parts correct', () => {
    const incorrectFaces: string[] = [':C', ':(']
    const correctFaces: string[] = [':)', ';D']
    const faces: string[] = [...incorrectFaces, ...correctFaces]

    const result = countSmiley(faces)
    const expectResult = 2

    expect(result).toBe(expectResult)
  })
})
