import { generalLogic, getRandomInt, getSum, getSub, getMult } from '../index.js'

export const brainCalc = () => {
  const questionCalc = 'What is the result of the expression?'

  const gameCalc = () => {
    const randomNumber1 = getRandomInt(1, 100)
    const randomNumber2 = getRandomInt(1, 100)

    const operators = ['+', '-', '*']
    const operator = operators[getRandomInt(0, 2)]

    const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`

    let result
    if (operator === '+') {
      result = getSum(randomNumber1, randomNumber2)
    }
    else if (operator === '-') {
      result = getSub(randomNumber1, randomNumber2)
    }
    else {
      result = getMult(randomNumber1, randomNumber2)
    }

    const correctAnswer = result.toString()
    return [question, correctAnswer]
  }
  generalLogic(questionCalc, gameCalc)
}
