import { generalLogic, getRandomInt } from '../index.js'

export const isPrime = (number) => {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

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
