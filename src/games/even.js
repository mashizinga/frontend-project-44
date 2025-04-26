import { generalLogic, getRandomInt } from '../index.js'

export const isEven = (number) => {
  const result = number % 2 === 0
  return result
}

export const brainEven = () => {
  const questionEven = 'Answer "yes" if the number is even, otherwise answer "no".'

  const gameEven = () => {
    const randomNumber = getRandomInt(1, 100)
    const question = `Question: ${randomNumber}`

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    return [question, correctAnswer]
  }

  generalLogic(questionEven, gameEven)
}
