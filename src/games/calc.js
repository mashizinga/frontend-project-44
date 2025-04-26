import { generalLogic, getRandomInt } from '../index.js'

export const getResult = (number1, number2, operator) => {
  let result
  if (operator === '+') {
    result = number1 + number2
  }
  else if (operator === '-') {
    result = number1 - number2
  }
  else {
    result = number1 * number2
  }
  return result
}

export const brainCalc = () => {
  const questionCalc = 'What is the result of the expression?'

  const gameCalc = () => {
    const randomNumber1 = getRandomInt(1, 100)
    const randomNumber2 = getRandomInt(1, 100)

    const operators = ['+', '-', '*']
    const operator = operators[getRandomInt(0, 2)]

    const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`

    let result = getResult(randomNumber1, randomNumber2, operator)

    const correctAnswer = result.toString()
    return [question, correctAnswer]
  }
  generalLogic(questionCalc, gameCalc)
}
