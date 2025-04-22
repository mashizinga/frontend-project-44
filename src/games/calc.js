import generalLogic from '../index.js';

export const brainCalc = () => {
   const questionCalc = 'What is the result of the expression?';

   const gameCalc = () => {
      const randomNumber1 = Math.floor(Math.random() * 101);
      const randomNumber2 = Math.floor(Math.random() * 101);

      const getRandomInt = (min, max) => {
         return Math.floor(Math.random() * (max - min + 1)) + min;
       }

      const operators = ['+', '-', '*'];
      const operator = operators[getRandomInt(1,3)];

      const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;

      let result;
      if (operator === '+') {
         result = randomNumber1 + randomNumber2;
      } else if (operator === '-') {
         result = randomNumber1 - randomNumber2;
      } else {
         result = randomNumber1 * randomNumber2;
      }
      const correctAnswer = result.toString();
      return [question, correctAnswer];
   };
   generalLogic(questionCalc, gameCalc);
}