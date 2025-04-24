import { generalLogic, getRandomInt, isNOD } from '../index.js'

export const brainGcd = () => {
  const questionGcd = 'Find the greatest common divisor of given numbers.'

  const gameGcd = () => {
    const randomNumber1 = getRandomInt(1, 100)
    const randomNumber2 = getRandomInt(1, 100)
    const question = `Question: ${randomNumber1} ${randomNumber2}`

    let answer = isNOD(randomNumber1, randomNumber2)
    let correctAnswer = answer.toString()

    return [question, correctAnswer]
  }
  generalLogic(questionGcd, gameGcd)
}
