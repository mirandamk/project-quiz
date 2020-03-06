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
const answerButton = document.getElementsByClassName('btn')
var conLevel1 = document.getElementById('cfd1')
var conLevel2 = document.getElementById('cfd2')
var conLevel3 = document.getElementById('cfd3')
var conLevel4 = document.getElementById('cfd4')

var resultContainer = document.getElementsByClassName('result-container')
var resultContainerImg = document.querySelectorAll('result-container img')
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
  })
}

startButton.addEventListener('click', startGame)
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
  while (resultContainerImg.firstChild) {
    resultContainerImg.removeChild(resultContainerImg.firstChild)
  }
}

function showQuestion(question){
questionElement.innerText = question.question
question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  answerButtonsElement.appendChild(button)

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
    resultText.innerHTML = `Wrong answer. Seriously? You think you know your stuff?`
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
    img.src = "https://media.giphy.com/media/rypyVNU547qrC/giphy.gif";
    var src = document.getElementById("image-container");
    src.appendChild(img);
  } 
    else if (!outcomeAnswer) {
    resultText.innerHTML = `Wrong answer? Seriously? Gosh, I'm speechless `
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
    resultText.innerHTML = `Wrong answer`
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
    finalText.innerHTML = `0 out of the 4 questions correct`
    var resultImg = document.createElement("img");
    resultImg.src = "https://media.giphy.com/media/h8HmN0UcEKR0xWnv3R/giphy.gif";
    var resultImgContainer = document.getElementById("result-container");
    resultImgContainer.appendChild(resultImg);
  } 
  else if (numCorrect === 1){
    finalText.innerHTML = `1 out of the 4 questions correct`
    var resultImg = document.createElement("img");
    resultImg.src = "https://media.giphy.com/media/3o6ZtokgzQv6ThHzj2/giphy.gif";
    var resultImgContainer = document.getElementById("result-container");
    resultImgContainer.appendChild(resultImg);
  } 
    else if (numCorrect === 2){
    finalText.innerHTML = `2 out of the 4 questions correct`
    var resultImg = document.createElement("img");
    resultImg.src = "https://media.giphy.com/media/IsifDvdoFPUe4/giphy.gif";
    var resultImgContainer = document.getElementById("result-container");
    resultImgContainer.appendChild(resultImg);
  } 
    else if (numCorrect === 3){
    finalText.innerHTML = `3 out of the 4 questions correct`
    var resultImg = document.createElement("img");
    resultImg.src = "https://media.giphy.com/media/26xBENWdka2DSvvag/giphy.gif";
    var resultImgContainer = document.getElementById("result-container");
    resultImgContainer.appendChild(resultImg);
  } 
    else {
    finalText.innerHTML = `4 out of the 4 questions correct. Well done!`
    var resultImg = document.createElement("img");;
    resultImg.src = "https://media.giphy.com/media/2alKkyRFPKRSU/giphy.gif";
    var resultImgContainer = document.getElementById("result-container");
    resultImgContainer.appendChild(resultImg);
}
}

const questions = [
  {
    question: 'What would be an inappropriate way to call your wife?',
    answer: [
      {text: 'Poepie - poopie', correct: false},
      {text: 'Scheetje - little fart', correct: false},
      {text: 'Wijf - wive', correct: true},
      {text: 'Schatje - little treasure', correct: false},
    ]
  } , 
  {
    question: 'You got invited to a Dutch birthday party. You arrive a bit late and the room is full of family and friends. Who do you congratulate?',
    answer: [
      {text: 'Just the birthday boy / girl', correct: false},
      {text: 'The birthday boy / girl and his / her parents', correct: false},
      {text: 'Every single person that is in the room', correct: true},
      {text: 'Every single person that is in the room, plus you are expected to call the parents if they are not present', correct: false},
    ]
  } , 
  {
    question: 'What is NOT an existing political party in the Netherlands',
    answer: [
      {text: 'Millenialpartij - Millenial Party', correct: true},
      {text: 'Partij voor de Dieren - Animal Party', correct: false},
      {text: '50Plus - 50 Plus', correct: false},
      {text: 'Piratenpartij - Pirate Party', correct: false},
    ]
  } , 
  {
    question: 'A Dutch oven is a large cooking pot, but it also has a different meaning. What is the second meaning?',
    answer: [
      {text: 'Smoking weed in a very small room, without ventilating it', correct: false},
      {text: 'When you fart in bed and pull the covers over someone else\'s head', correct: true},
      {text: 'Smoking weed while covering your head with a bag', correct: false},
      {text: 'Cooking smelly food, like brussel sprouts, in a small room without ventilating it properly', correct: false},
    ]
  }
];

