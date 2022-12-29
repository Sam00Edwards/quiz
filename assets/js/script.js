(function(){

  // Variables
  const quizContainer=document.getElementById("quiz");
  const resultContainer=document.getElementById("results");
  const submitButton=document.getElementById("submit");

// Functions
  function myQuiz(){
    
    const result=[];

    myQuestions.forEach(
      (currentQuestion, questionNumber)
      =>{
        const answer=[];

        for(letter in currentQuestion.answer){

          // Radio button
          answer.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}:${currentQuestion.answer[letter]}</label>`
          );
        }

quizContainer.innerHTML=result.join("");

      }

      function showResult(){

        const answerContainers=quizContainer.querySelectorAll(".answers");
      
        let numCorrect=0;
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector=
            `input[name=question${questionNumber}]:checked`;
            const userAnswer=
            (answerContainer.querySelector(selector)|| {}).value;

            if(userAnswer===currentQuestion.correctAnswer){

              numCorrect++;

              answerContainers[questionNumber].getElementsByClassName.colour="green";
            }

            else{
              answerContainers[questionNumber].getElementsByClassName.colour="red";
            }
          });
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