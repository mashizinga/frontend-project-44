import { generalLogic, getRandomInt, getProgression } from '../index.js'

export const brainProgression = () => {
  const questionProgression = 'What number is missing in the progression?'

  const gameProgression = () => {
    const randomNumb = getRandomInt(0, 9)
    const randomStep = getRandomInt(1, 9)

    const randomArray = getProgression(randomNumb, randomStep)
    const randomPosition = getRandomInt(0, 9)
    const answer = randomArray[randomPosition]
    const unknown = '..'
    randomArray[randomPosition] = unknown
    const arrayQuestion = randomArray.join(' ')

    const question = `Question: ${arrayQuestion}`
    let correctAnswer = answer.toString()

    return [question, correctAnswer]
  }

  generalLogic(questionProgression, gameProgression)
}
