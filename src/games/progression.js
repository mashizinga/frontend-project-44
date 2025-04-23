import generalLogic from '../index.js'

export const brainProgression = () => {
  const questionProgression = 'What number is missing in the progression?'

  const gameProgression = () => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const randomNumb = getRandomInt(0, 9)
    const randomStep = getRandomInt(1, 9)

    const randomNumbers = []
    const getRandomArray = (randomNumb, randomStep) => {
      let a = randomNumb
      for (let i = 0; i < 10; i += 1) {
        a = a + randomStep
        randomNumbers.push(a)
      }
      return randomNumbers
    }
    const randomArray = getRandomArray(randomNumb, randomStep)
    const randomPosition = getRandomInt(0, 9)
    const answer = randomArray[randomPosition]
    const unknown = '..'
    randomArray[randomPosition] = unknown
    const arrayQuestion = randomArray.join(' ')

    const question = `Question: ${arrayQuestion}`
    let correctAnswer = answer.toString()

    return [question, correctAnswer]
  }

  generalLogic(questionProgression, gameProgression)
}
