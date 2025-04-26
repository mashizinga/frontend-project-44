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
