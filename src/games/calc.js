import generalLogic from '../index.js';

export const brainCalc = () => {
   const questionCalc = 'What is the result of the expression?';

   const gameCalc = () => {
      const randomNumber1 = Math.floor(Math.random() * 101);
      const randomNumber2 = Math.floor(Math.random() * 101);
      const getRandomOperator = () => {
         const operators = ['+', '-', '*'];
         const random = operators[Math.floor(Math.random() * operators.length)];
         return random;
      }
      const randomOp = getRandomOperator();
      const question = `${randomNumber1} ${randomOp} ${randomNumber2}`;

      let result;
      if (randomOp === '+') {
         result = randomNumber1 + randomNumber2;
      } else if (randomOp === '-') {
         result = randomNumber1 - randomNumber2;
      } else {
         result = randomNumber1 * randomNumber2;
      }
      const correctAnswer = result.toString();
      return [question, correctAnswer];
   };
   generalLogic(questionCalc, gameCalc);
}