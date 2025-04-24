import { generalLogic, getRandomInt, isSum, isSub, isMult } from '../index.js'

export const brainCalc = () => {
  const questionCalc = 'What is the result of the expression?'

  const gameCalc = () => {
    const randomNumber1 = getRandomInt(1, 100)
    const randomNumber2 = getRandomInt(1, 100)

    const operators = ['+', '-', '*']
    const operator = operators[getRandomInt(1, 2)]

    const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`

    let result
    if (operator === '+') {
      result = isSum(randomNumber1, randomNumber2)
    }
    else if (operator === '-') {
      result = isSub(randomNumber1, randomNumber2)
    }
    else {
      result = isMult(randomNumber1, randomNumber2)
    }

    const correctAnswer = result.toString()
    return [question, correctAnswer]
  }
  generalLogic(questionCalc, gameCalc)
}
