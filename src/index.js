import readlineSync from 'readline-sync'

export const generalLogic = (gameQuestion, getGameData) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?')
  console.log(`Hello, ${name}!`)

  console.log(gameQuestion)

  let i = 0
  while (i <= 2) {
    const resultRound = getGameData()
    console.log(resultRound[0])
    const answerUser = readlineSync.question('Your answer:')
    if (answerUser === resultRound[1]) {
      i += 1
      console.log('Correct!')
    }
    else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${resultRound[1]}".\nLet's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getSum = (number1, number2) => {
  const result = number1 + number2
  return result
}

export const getSub = (number1, number2) => {
  const result = number1 - number2
  return result
}

export const getMult = (number1, number2) => {
  const result = number1 * number2
  return result
}

export const isEven = (number) => {
  const result = number % 2 === 0
  return result
}

export const isNOD = (a, b) => {
  let c
  if (a > b) {
    while (b !== 0) {
      c = b
      b = a % b
      a = c
    }
  }
  else if (a < b) {
    return isNOD (b, a)
  }
  return c
}

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

export const getProgression = (randomNumb, randomStep) => {
  const randomNumbers = []
  let a = randomNumb
  for (let i = 0; i < 10; i += 1) {
    a = a + randomStep
    randomNumbers.push(a)
  }
  return randomNumbers
}
