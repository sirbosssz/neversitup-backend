export default function countSmiley(faces: string[]): number {
  const smileyFaces: string[] = faces.filter((face: string) => {
    const eye = face[0]
    const nose = face.length === 3 ? face[1] : ''
    const mouth = face[face.length - 1]

    const isVaidSize = face.length === 2 || face.length === 3
    const isVaidEyes = [':', ';'].includes(eye)
    const isValidNose = ['-', '~', ''].includes(nose)
    const isValidMouth = ['D', ')'].includes(mouth)

    return isVaidSize && isVaidEyes && isValidNose && isValidMouth
  })

  return smileyFaces.length
}
