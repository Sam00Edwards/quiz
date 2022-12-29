(function(){
  function myQuiz(){
    
    const result=[];

    myQuestions.forEach(
      (currentQuestion, questionNumber)
      =>{
        const answer=[];

        for(letter in currentQuestion.answer){

          answer.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}:${currentQuestion.answer[letter]}</label>`
          );
        }
      }
    )
  }
});

const myQuestions = [
    {
      question: "Who wrote Frankenstein?",
      answers: {
        a: 'Mary Shelley',
        b: 'Lord Byron',
        c: 'Bram Stoker'
      },
      correctAnswer: 'a'
    },
    {
      question: "Which Author Used the Pseudonym Currer Bell?",
      answers: {
        a: 'Lewis Carroll',
        b: 'Charlotte Brontë',
        c: 'Clive Barker'
      },
      correctAnswer: 'b'
    },
    {
        question: "Which of These Jane Austin Books Was Published First?",
        answers: {
          a: 'Persuasion',
          b: 'Emma',
          c: 'Sense and Sensibility'
        },
        correctAnswer: 'c'
      },
      {
        question: "How Many Books In The Discworld Series?",
        answers: {
          a: '42',
          b: '41',
          c: '16'
        },
        correctAnswer: 'b'
      }
  ];
  myQuiz();