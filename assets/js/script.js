const startButton = document.getElementById("btn-start")
const questionBox = document.getElementById("question-box");
const quitQuiz = document.getElementById("quit-quiz");
const nextQuestion = document.getElementById("submit");
const instructionBox = document.getElementById("instruction_box")
const nextApp = document.getElementById("next-app");

// adding addEventfunction (when the start button clicked)

startButton.addEventListener("click", function () {
    questionBox.classList.remove("question-containers");
    instructionBox.setAttribute("class", "instruction-box-1");
    $(".main-container").hide();
})

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

  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');

  generateQuiz(myQuestions, quizContainer, submitButton);

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

/**
* Gets the current tally of incorrect answers from the DOM and increments it by 1
*/
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

  function generateQuiz(questions, quizContainer, submitButton){

    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      const output = [];
      let answers;

      // for each question...
      for(const i=0; i<questions.length; i++){

        // first reset the list of answers
        answers = [];

        // for each available answer...
        for(letter in questions[i].answers){

          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }

        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }

      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer){

      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      const userAnswer = '';
      const numCorrect = 0;

      // for each question...
      for(const i=0; i<questions.length; i++){

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }

    //   // show number of correct answers out of total
    //   resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.addEventListener('click', function(){
      showResults(questions, quizContainer);
    });

  }