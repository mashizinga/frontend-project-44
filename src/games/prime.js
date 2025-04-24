import { generalLogic, getRandomInt, isPrime } from '../index.js'

export const brainPrime = () => {
  const questionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const gamePrime = () => {
    const randomNumber = getRandomInt(1, 100)
    const question = `Question: ${randomNumber}`

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'

    return [question, correctAnswer]
  }

  generalLogic(questionPrime, gamePrime)
}
