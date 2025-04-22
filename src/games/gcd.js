import generalLogic from '../index.js';

export const brainGcd = () => {
    const questionGcd = 'Find the greatest common divisor of given numbers.';

    const gameGcd = () => {
        const randomNumber1 = Math.floor(Math.random() * 101);
        const randomNumber2 = Math.floor(Math.random() * 101);
        const question = `Question: ${randomNumber1} ${randomNumber2}`;

        const answerNOD = (a, b) => {
            let c;
            if (a > b) {
            while (b !==0 ) {
                c = b;
                b = a % b;
                a = c;
                }
            } else if (a < b) {
            return answerNOD (b, a);
            }
            return c;
            } 

        let answer = answerNOD(randomNumber1, randomNumber2);
        let correctAnswer = answer.toString();
        
        return [question, correctAnswer];

    };
    generalLogic(questionGcd, gameGcd);
}