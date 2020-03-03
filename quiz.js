
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const finalButton = document.getElementById('final-btn')
const startAgainButton = document.getElementById('startagain-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultsContainer = document.getElementById('results')
const finalText = document.getElementById('final-text')
const confidenceLevelContainerElement = document.getElementById ('confidence-container')
const levelButtonsElement = document.getElementById('confidence-buttons')
const confidenceElement = document.getElementById('confidenceLevel')

let numCorrect = 0;
let shuffledQuestions, currentQuestionIndex
let confidenceButtonClicked = false;

let confidenceButtons = document.querySelectorAll("#confidence-buttons button");

for(let i = 0; i < confidenceButtons.length; i++) {
  confidenceButtons[i].addEventListener("click", function(){
    confidenceButtonClicked = true;
  })
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  if(confidenceButtonClicked){
    confidenceButtonClicked = false;
    currentQuestionIndex++
    setNextQuestion()
  } else {
    alert("Please finish our survey first");
  }

  })
finalButton.addEventListener('click', finalScreen)
startAgainButton.addEventListener('click', startGame)

function startGame(){
  startButton.classList.add('hide')
  startAgainButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() -.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  confidenceLevelContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
  answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function showQuestion(question){
questionElement.innerText = question.question
question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  answerButtonsElement.appendChild(button)
//  if (levelButtonsElement').clicked == true)
//  {
  button.addEventListener('click', selectAnswer)
//  }
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
})
}

function selectAnswer(event){
  const selectedButton = event.target
  const correct = selectedButton.dataset.correct
  if (correct){
    numCorrect++
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex +1 ){
  nextButton.classList.remove('hide')
  } else {
  finalButton.classList.remove('hide')
  }
resultsContainer.innerHTML = `${numCorrect} out of ${questions.length} questions correct`
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function finalScreen(){
  nextButton.classList.add('hide')
  questionContainerElement.classList.add('hide')
  confidenceLevelContainerElement.classList.add('hide')
  finalButton.classList.add('hide')
  startAgainButton.classList.remove('hide')
  if (numCorrect === 0){
    finalText.innerHTML = `You're a loser`
  } else if (numCorrect === 1){
    finalText.innerHTML = `You're sort of a loser`
  } else if (numCorrect === 2){
    finalText.innerHTML = `You're sort of okay`
  } else {
    finalText.innerHTML = `Well done`
}
}

const questions = [
  {
    question: 'What is the biggest mammal of the world',
    answer: [
      {text: 'tiger', correct: false},
      {text: 'whale', correct: true},
      {text: 'elephant', correct: false},
      {text: 'rhino', correct: false},
    ]
  } , 
  {
    question: 'What is the biggest pussy of the world',
    answer: [
      {text: 'tiger', correct: true},
      {text: 'whale', correct: false},
      {text: 'elephant', correct: false},
      {text: 'rhino', correct: false},
    ]
  } , 
  {
    question: 'What is the horniest animal of the world',
    answer: [
      {text: 'tiger', correct: false},
      {text: 'whale', correct: false},
      {text: 'elephant', correct: false},
      {text: 'rhino', correct: true},
    ]
  }
];

// const confidenceLevel = [
//   {
//     confidence: 'how confident are you in the right answer?',
//     level: [
//       {text: 'easy peasy, I got this'},
//       {text: 'pretty certain this is the right answer'},
//       {text: 'not sure about this question, but I mostly understand the topic / theory / model'},
//       {text: 'I have absolutely no idea what you are talking about'},
//     ]
//   } , 
//   {
//     confidence: 'how confident are you in the right answer?',
//     level: [
//       {text: 'easy peasy, I got this'},
//       {text: 'pretty certain this is the right answer'},
//       {text: 'not sure about this question, but I mostly understand the topic / theory / model'},
//       {text: 'I have absolutely no idea what you are talking about'},
//     ]
//   } , 
//   {
//     confidence: 'how confident are you in the right answer?',
//     level: [
//       {text: 'easy peasy, I got this'},
//       {text: 'pretty certain this is the right answer'},
//       {text: 'not sure about this question, but I mostly understand the topic / theory / model'},
//       {text: 'I have absolutely no idea what you are talking about'},
//     ]
//   } 
// ];