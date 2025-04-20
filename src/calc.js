import readlineSync from 'readline-sync';

export const answerCalc = () => {
   const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?'); 
   console.log(`Hello, ${name}!`);
   let i= 0;
   while (i <= 2) {
      const randomNumber1 = Math.floor(Math.random() * 101);
      const randomNumber2 = Math.floor(Math.random() * 101);
      const getRandomOperator = () => {
         const operators = ['+', '-', '*'];
         const random = operators[Math.floor(Math.random() * operators.length)];
         return random;
      }
      const randomOp = getRandomOperator();
      const randomExpression = `${randomNumber1} ${randomOp} ${randomNumber2}`;
      const answer = readlineSync.question(`What is the result of the expression?\nQuestion:: ${randomExpression}\nYour answer:`)

      let result;
      if (randomOp === '+') {
         result = randomNumber1 + randomNumber2;
      } else if (randomOp === '-') {
         result = randomNumber1 - randomNumber2;
      } else {
         result = randomNumber1 * randomNumber2;
      }
      const correctAnswer = result.toString();

      if (answer === (correctAnswer)) {
       i += 1;
       console.log('Correct!');
       } else {
           return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
       }
   }
   return console.log(`Congratulations, ${name}!`);
}