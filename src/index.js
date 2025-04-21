import readlineSync from 'readline-sync';

const generalLogic = (gameQuestion, gameActions) => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
    console.log(`Hello, ${name}!`) 

    console.log(gameQuestion);

    let i = 0;
    while (i <= 2) {
        const resultGame = gameActions();
        console.log(resultGame[0]);
        const answerUser = readlineSync.question('Your answer:');
        if (answerUser === resultGame[1]) {
            i += 1;
            console.log('Correct!');
        } else {
            console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${resultGame[1]}".\nLet's try again, ${name}!`)
            return;
        }
    }


    console.log(`Congratulations, ${name}!`);
}

export default generalLogic;