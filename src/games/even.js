import generalLogic from '../index.js'

export const brainEven = () => {
  const questionEven = 'Answer "yes" if the number is even, otherwise answer "no".'

  const gameEven = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    const question = `Question: ${randomNumber}`

    let correctAnswer = ''
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes'
    }
    else {
      correctAnswer = 'no'
    }

    return [question, correctAnswer]
  }

  generalLogic(questionEven, gameEven)
}
