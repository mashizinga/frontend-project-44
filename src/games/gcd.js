import { generalLogic, getRandomInt } from '../index.js'

export const getNOD = (a, b) => {
  let c
  if (a > b) {
    while (b !== 0) {
      c = b
      b = a % b
      a = c
    }
  }
  else if (a < b) {
    return getNOD (b, a)
  }
  return c
}

export const brainGcd = () => {
  const questionGcd = 'Find the greatest common divisor of given numbers.'

  const gameGcd = () => {
    const randomNumber1 = getRandomInt(1, 100)
    const randomNumber2 = getRandomInt(1, 100)
    const question = `Question: ${randomNumber1} ${randomNumber2}`

    let answer = getNOD(randomNumber1, randomNumber2)
    let correctAnswer = answer.toString()

    return [question, correctAnswer]
  }
  generalLogic(questionGcd, gameGcd)
}
