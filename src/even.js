import readlineSync from 'readline-sync';

export const answerUser = () => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?'); 
    console.log(`Hello, ${name}!`);
    let i= 0;
    while (i <= 2) {
        const randomNumber = Math.floor(Math.random() * 101);
        const answer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}\nYour answer:`)
    if ((randomNumber % 2 === 0) && (answer === 'yes')) {
        i += 1;
        console.log('Correct!');
        } else if ((randomNumber % 2 !== 0) && (answer === 'no')) {
            i += 1;
            console.log('Correct!');
        } else {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
}