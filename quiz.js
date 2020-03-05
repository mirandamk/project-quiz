//test

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const finalButton = document.getElementById('final-btn')
const startAgainButton = document.getElementById('startagain-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const finalText = document.getElementById('final-text')
const confidenceLevelContainerElement = document.getElementById ('confidence-container')
const levelButtonsElement = document.getElementById('confidence-buttons')
const confidenceElement = document.getElementById('confidenceLevel')
//const resultButton = document.getElementById('result-btn')
var conLevel1 = document.getElementById('cfd1')
var conLevel2 = document.getElementById('cfd2')
var conLevel3 = document.getElementById('cfd3')
var conLevel4 = document.getElementById('cfd4')
const answerButton = document.getElementsByClassName('btn')
var resultContainer = document.getElementsByClassName('result-container')
var resultText = document.getElementById('result-text')
var imageContainer = document.getElementById('image-container')
var body = document.getElementById('body')
 
let numCorrect = 0;
let shuffledQuestions, currentQuestionIndex
let confidenceButtonClicked = false;

let outcomeAnswer = undefined

let confidenceButtons = document.querySelectorAll("#confidence-buttons button");

for(let i = 0; i < confidenceButtons.length; i++) {
  confidenceButtons[i].addEventListener("click", function(){
    confidenceButtonClicked = true;
    //resultButton.classList.remove('hide')
  })
}

startButton.addEventListener('click', startGame)
//resultButton.addEventListener('click', seeResult)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++ 
  setNextQuestion()
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
  //resultsContainer.innerHTML = ''
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
  answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild)
  }
  while (resultText.firstChild) {
    resultText.removeChild(resultText.firstChild)
  }
  while (finalText.firstChild) {
    finalText.removeChild(finalText.firstChild)
  }
}

function showQuestion(question){
questionElement.innerText = question.question
question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  answerButtonsElement.appendChild(button)

  //resultButton.classList.remove('hide')

  button.addEventListener('click', () => {
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      numCorrect++;
    } 
    outcomeAnswer = answer.correct
  })
  })
}

function questionsLeft() {
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    finalButton.classList.remove('hide')
  }
}


// var img = document.createElement("img");
// img.src = "https://thelifevirtue.com/you-got-this-quotes-funny-memes-together/";
// resultContainer.appendChild(img);


conLevel1.addEventListener('click', () => {
  questionsLeft()
  if (outcomeAnswer) {
    resultText.innerHTML = `You got this! You got ${numCorrect} question out of the ${questions.length} questions correct`
    var img = document.createElement("img");
    img.src = "https://media.giphy.com/media/ZHn4xJj0hLZ0Q/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
  } 
   else if (!outcomeAnswer) {
    resultText.innerHTML = `Seriously? You think you know your stuff?`
    var img = document.createElement("img");
    img.src = "https://media.giphy.com/media/rfskmSvktqSoo/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
   }
  })

conLevel2.addEventListener('click', () => {
  questionsLeft()
   if (outcomeAnswer) {
    resultText.innerHTML = `You see, you know your stuff! You got ${numCorrect} question out of the ${questions.length} questions correct`
    var img = document.createElement("img");
    img.src = "https://sayingimages.com/wp-content/uploads/dont-worry-you-got-this-meme.jpg";
    var src = document.getElementById("image-container");
    src.appendChild(img);

  } 
    else if (!outcomeAnswer) {
    resultText.innerHTML = `Seriously, what a disappointment`
    var img = document.createElement("img");
    img.src = "https://media.giphy.com/media/RBeddeaQ5Xo0E/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
   }
  })

conLevel3.addEventListener('click', () => {
  questionsLeft()
    if (outcomeAnswer) {
    resultText.innerHTML = `Surprise! You picked the right answer. You got ${numCorrect} question out of the ${questions.length} questions correct`
    var img = document.createElement("img");
    img.src = "https://media.giphy.com/media/90F8aUepslB84/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
     } 
    else if (!outcomeAnswer) {
    resultText.innerHTML = `Wrong answer. I'm speechless`
    var img = document.createElement("img");
    img.src = " https://media.giphy.com/media/BYeeRPPXcQS4M/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
  }
  })

conLevel4.addEventListener('click', () => {
  questionsLeft()
    if (outcomeAnswer) {
    resultText.innerHTML = `Lucky guess? You got ${numCorrect} question out of the ${questions.length} questions correct`
    var img = document.createElement("img");
    img.src = "https://media.giphy.com/media/VvXg0yjJQgfEQ/giphy.gif ";
    var src = document.getElementById("image-container");
    src.appendChild(img);
    } 
   else if (!outcomeAnswer) {
    resultText.innerHTML = `Jon Snow is not the only one that knows nothing.`
    var img = document.createElement("img");
    img.src = "https://media.giphy.com/media/13f5iwTRuiEjjW/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
 }
 })

// function selectAnswer(event){
//  // resultButton.classList.add('hide')

//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//   setStatusClass(button, button.dataset.correct)
//   })
//   if(shuffledQuestions.length > currentQuestionIndex +1 ){
//   nextButton.classList.remove('hide')
//   } else {
//   finalButton.classList.remove('hide')
//   }
// }


function changeColorButtons(answerButton){
  debugger
  for (let i = 0; i<answerButton.length; i++) {
 if (outcomeAnswer == true){
  answerButton.classList.add('correct')
} else {
  answerButton.classList.add('wrong')
}
}
}

function setStatusClass(element, outcomeAnswer){
  clearStatusClass(element)
  if (outcomeAnswer) {
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
  imageContainer.removeChild(imageContainer.childNodes[0]);
  nextButton.classList.add('hide')
  imageContainer.classList.add('hide')
  questionContainerElement.classList.add('hide')
  confidenceLevelContainerElement.classList.add('hide')
  finalButton.classList.add('hide')
  startAgainButton.classList.remove('hide')
  resultText.classList.add('hide')
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

