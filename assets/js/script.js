(function(){

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

// Functions
  function myQuiz(){
    
    const result = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];

        for(letter in currentQuestion.answers) {

          // Radio button
          answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        result.push(
          `<div class="slide">
          <div class="question"> ${currentQuestion.question}</div>
          <div class="answers"> ${answers.join("")}</div>
          </div>`
        );
        }
    );
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

              answerContainers[questionNumber].style.colour="green";
            }

            else{
              answerContainers[questionNumber].style.colour="red";
            }
          });

          resultContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        }

        function showSlide(n) {

          slides[currentSlide].classList.remove('active-slide');
          slides[n].classList.add('active-slide');
          currentSlide = n;
          if(currentSlide === slides.length-1){
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
          }

          else{
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
          }
        }

        function showNextSlide() {
          showSlide(currentSlide + 1);
        }
      
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
            },
            {
        question: "Emily Brontë's Wuthering Heights recounts the tragic romance between which two lovers?",
            answers: {
              a: 'Catherine and Heathcliff',
              b: 'Eleanor and Christian',
              c: 'Isabella and Hindley'
            },
            correctAnswer: 'a'
          },
          {
            question: "Who is the hero of Douglas Adams's Hitchhiker's Guide to the Galaxy series?",
            answers: {
              a: 'Paul Atreides',
              b: 'Arthur Dent',
              c: 'Rick Deckard'
            },
            correctAnswer: 'b'
          },
          {
              question: "Neil Gaiman's Neverwhere is set in an underground world of which city?",
              answers: {
                a: 'Dublin',
                b: 'New York City',
                c: 'London'
              },
              correctAnswer: 'c'
            },
            {
              question: "Sir Arthur Conan Doyle's Sherlock Holmes made his first appearance in print with which novel?",
              answers: {
                a: 'The Hound of the Baskervilles',
                b: 'A Study in Scarlet',
                c: 'The Sign of the Four'
              },
              correctAnswer: 'b'
            },
            {
        question: "When was Edgar Allan Poe's “The Raven” first published?",
            answers: {
              a: '1845',
              b: '1838',
              c: '1840'
            },
            correctAnswer: 'a'
          },
          {
            question: "What story written by Oscar Wilde has to do with immortality?",
            answers: {
              a: 'The Importance of Being Earnest',
              b: 'The Picture of Dorian Gray',
              c: 'Lady Windermeres Fan'
            },
            correctAnswer: 'b'
          },
          {
              question: "What is the name of Stephen King's the first published novel?",
              answers: {
                a: 'The Shining',
                b: 'Firestarter',
                c: 'Carrie'
              },
              correctAnswer: 'c'
            },
            {
              question: "In T.S. Elliot's book of practical cats, what is the name of the mystery cat?",
              answers: {
                a: 'Mr. Mistoffelees',
                b: 'Macavity',
                c: 'Gus'
              },
              correctAnswer: 'b'
            }
        ];
myQuiz();

const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener("click", showResult);
nextButton.addEventListener("click", showNextSlide);
})();
