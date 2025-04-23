import generalLogic from '../index.js'

export const brainPrime = () => {
  const questionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".'

  const gamePrime = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    const question = `Question: ${randomNumber}`

    const isPrime = (number) => {
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

    let correctAnswer = ''
    if (isPrime(randomNumber) === true) {
      correctAnswer = 'yes'
    }
    else {
      correctAnswer = 'no'
    }

    return [question, correctAnswer]
  }

  generalLogic(questionPrime, gamePrime)
}
