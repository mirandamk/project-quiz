//grab startbutton html
const startButton = document.getElementById('start-btn')

//grab nextbutton html
const nextButton = document.getElementById('next-btn')

//grab question container html
const questionContainerElement = document.getElementById ('question-container')

//grab question html
const questionElement = document.getElementById('question')

//grab answer html
const answerButtonsElement = document.getElementById('answer-buttons')

//grab result container
const resultsContainer = document.getElementById('results')

// define to shuffle the questions 
let shuffledQuestions, currentQuestionIndex

//tell comp to start function startGame after click
startButton.addEventListener('click', startGame)

//start number correct questions
let numCorrect = 0;

// tell comp to add next button. take currect question index and add one question
nextButton.addEventListener('click', () => {
currentQuestionIndex++
//call function setNextQuestion
setNextQuestion()
})

//start the game
function startGame(){
//select startbutton and add a classlist that will tell the btn to hide. There is no hide in the html right now.
  startButton.classList.add('hide')
//function to shuffle questions and set the index to zero 
shuffledQuestions = questions.sort(() => Math.random() -.5)
currentQuestionIndex = 0
//select questioncontainer and remove the hide function so that it becomes visible
  questionContainerElement.classList.remove('hide')
//go to the select next question function 
  setNextQuestion()
}

function setNextQuestion(){
  //reset everthing related to form, question, body, back to default
  resetState()
  //shuffled question = current question at the current index min 17
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  //get questionElement, innertext renderes it with question? question?
questionElement.innerText = question.question
// loop through the buttons.
question.answer.forEach(answer => {
// create a new button (no idea why)
  const button = document.createElement('button')
// render the text from the button to answer section -> text (zie onderstaand)
  button.innerText = answer.text
//add btn classlist to button
  button.classList.add('btn')
// min 19
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
// add eventlistener so that after click the selectAnswer function starts
button.addEventListener('click', selectAnswer)
//take excisting parent answerbuttom and appendChild button that was created before
answerButtonsElement.appendChild(button)
})

}

function resetState() {
  // clear background color
  clearStatusClass(document.body)
  //hide next button
  nextButton.classList.add('hide')
  // loop through children of answerbuttonelements. if there is a child in the element, keep on removing
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// e = take event as a parameter
function selectAnswer(e){
// see which button the user selected. no idea what e.target means
const selectedButton = e.target
//check if it is correct
const correct = selectedButton.dataset.correct
if (correct){
  numCorrect++
}
//function takes body and take if it should be set to correct or wrong
setStatusClass(document.body, correct)
//loop through other buttons and select and set class for buttons. important to convert is to array because returning a ?live collection? so that you can use forEach function
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
//check if there are any questions left
if(shuffledQuestions.length > currentQuestionIndex +1 ){
// to add the next button, need to remove the hide 
nextButton.classList.remove('hide')
} else {
  //give player chance to start again
  startButton.innerText = "restart game"
  startButton.classList.remove('hide')
}
resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`
}


function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// function to clear classes
function clearStatusClass(element){
element.classList.remove('correct')
element.classList.remove('wrong')
}



const questions = [
  {
    question: 'what is the biggest mammal of the world',
    answer: [
      {text: 'tiger', correct: false},
      {text: 'whale', correct: true},
      {text: 'elephant', correct: false},
      {text: 'rhino', correct: false},
    ]
  } , 
  {
    question: 'what is the biggest pussy of the world',
    answer: [
      {text: 'tiger', correct: true},
      {text: 'whale', correct: false},
      {text: 'elephant', correct: false},
      {text: 'rhino', correct: false},
    ]
  } , 
  {
    question: 'what is the horniest animal of the world',
    answer: [
      {text: 'tiger', correct: false},
      {text: 'whale', correct: false},
      {text: 'elephant', correct: false},
      {text: 'rhino', correct: true},
    ]
  }
]