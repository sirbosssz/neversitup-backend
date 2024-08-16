export default function shuffleString(word: string): string[] {
  const posibleResults: string[] = []

  const shuffle = (wordArray: string[], reference: number = 0) => {
    if (wordArray.length === reference) {
      posibleResults.push(wordArray.join(''))
    } else {
      for (let pointer = reference; pointer < wordArray.length; pointer++) {
        const swap = wordArray[reference]
        wordArray[reference] = wordArray[pointer]
        wordArray[pointer] = swap

        shuffle(wordArray, reference + 1)

        const swapReverse = wordArray[reference]
        wordArray[reference] = wordArray[pointer]
        wordArray[pointer] = swapReverse
      }
    }
  }

  shuffle(word.split(''))

  return [...new Set(posibleResults)]
}
