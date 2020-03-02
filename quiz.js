var i = 0;
// we will use "i" to be our question number - the starting number is always 0.


// we then use a FUNCTION, NextQu to update the questions, answers, etc.
function NextQu() {
i++;
document.getElementById("intro").style.display = "none";
document.getElementById("QuestionQuiz").innerHTML = "Question "+(i+1)+": "+Questions[i];
  document.getElementById("Answer1").style.display = "inline";
    document.getElementById("Answer2").style.display = "inline";
      document.getElementById("Answer3").style.display = "inline";
      document.getElementById("Solution").style.display = "none";
      document.getElementById("CurrentQuScore").style.display = "none";

      //we bring back any answers hidden after the previous answer and make the buttons show the next answer choices
document.getElementById("Answer1").innerHTML=Answers[i][0];
document.getElementById("Answer2").innerHTML=Answers[i][1];
document.getElementById("Answer3").innerHTML=Answers[i][2];

//We also enable all answer buttons again:
  document.getElementById("Answer1").disabled = false;
    document.getElementById("Answer2").disabled = false;
      document.getElementById("Answer3").disabled = false;

//We update the solution of the next question (note this will be hidden until the user has selected an answer)
document.getElementById("Solution").innerHTML=Solutions[i];
//we also hide the next question button again
document.getElementById("Next").style.display = "none";
}


//we need to leave the visitors with a nice message once they've finished the quiz and tell them their score - we hide the other content:
function FinishQu() {
  //show the final score:
  document.getElementById("Rolling Score").style.display="inline";
  //remove the questions and answers:
  document.getElementById("QuestionQuiz").style.display="none";
  document.getElementById("Answer1").style.display="none";
  document.getElementById("Answer2").style.display="none";
  document.getElementById("Answer3").style.display="none";
  document.getElementById("Solution").style.display="none";
  document.getElementById("CurrentQuScore").style.display="none";
  document.getElementById("Finish").style.display="none";
  }

var j;
//j is used to show which answer we selected, so we can pick the correct score

var ScoreTotal=[];



//We need to ensure when we select an answer, it does three things: 1. Highlight our selection 2. Grey out/delete the other answers but show "next question" 3. Show the score for that // QUESTION:
function Answer1Select() {
  if(i<Questions.length-1){
  j=0;
  document.getElementById("Next").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
  document.getElementById("Answer1").disabled = true;
  //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
  document.getElementById("Answer2").style.display = "none";
  document.getElementById("Answer3").style.display = "none";
  document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
  ScoreTotal.push(Score[i][j]);
  document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";
      }
      else{
//we don't bring "Next Question" back for the last answer, instead the Finish Quiz
  document.getElementById("Finish").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
        document.getElementById("Answer1").disabled = true;
        //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
        document.getElementById("Answer2").style.display = "none";
        document.getElementById("Answer3").style.display = "none";
        document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
        ScoreTotal.push(Score[i][j]);
        document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";


      }
    }
  function Answer2Select() {
    j=1;
    if(i<Questions.length-1){
    document.getElementById("Next").style.display = "inline";
    document.getElementById("Solution").style.display = "block";
    document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer2").disabled = true;
    document.getElementById("Answer1").style.display = "none";
    document.getElementById("Answer3").style.display = "none";
    document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
    ScoreTotal.push(Score[i][j]);
    document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";
  }
  else{
//we don't bring "Next Question" back for the last answer, instead the Finish Quiz
document.getElementById("Finish").style.display = "inline";
document.getElementById("Solution").style.display = "block";
document.getElementById("CurrentQuScore").style.display = "block";
    document.getElementById("Answer1").disabled = true;
    //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
    document.getElementById("Answer1").style.display = "none";
    document.getElementById("Answer3").style.display = "none";
    document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
    ScoreTotal.push(Score[i][j]);
    document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";


  }
    }
    function Answer3Select() {
      j=2;
      if(i<Questions.length-1){
      document.getElementById("Next").style.display = "inline";
      document.getElementById("Solution").style.display = "block";
      document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer3").disabled = true;
      document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer2").style.display = "none";
      document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
      ScoreTotal.push(Score[i][j]);
      document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";
    }
    else{
  //we don't bring "Next Question" back for the last answer, instead the Finish Quiz
  document.getElementById("Finish").style.display = "inline";
  document.getElementById("Solution").style.display = "block";
  document.getElementById("CurrentQuScore").style.display = "block";
      document.getElementById("Answer1").disabled = true;
      //this stops the user being able to select the correct answer multiple time to top up their score. We must then remember to enable it in the "NextQu" function.
      document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer2").style.display = "none";
      document.getElementById("CurrentQuScore").innerHTML="You scored "+Score[i][j]+" on this question";
      ScoreTotal.push(Score[i][j]);
      document.getElementById("Rolling Score").innerHTML="Hey! Thanks a lot for taking our quiz - your final score is..."+ScoreTotal.reduce(getSum)+" out of 5";


    }
      }
//with this function, we set the answer selectors to 0,1 or 2, which means the score will be set to the relevant item in the score array for question i, Score[i][j]



//Questions are set up in an "array", the square brackets with Q1, Q2 being the questions which we can amend each time.
var Q1 = "What other category is there beside routine activities and project based activities?";
var Q2 = "Who decides if a project result has been delivered?";
var Q3 = "What is a 'milestone' in a project?";
var Q4 = "What is an advantage of project-based work?";
var Q5 = "Which statement is true in regards to the project goal and the project result?";


var Questions = [Q1,Q2,Q3,Q4,Q5];
//In a very similar way, we will include our answers


var A1 = ["Improvised activities", "Process activities", "Planned activities"];
var A2 = ["Final user", "Project leader", "Commission client"];
var A3 = ["The moment the final product needs to be delivered", "A meeting during which important decisions are made", "The moment a (sub)product is delivered"];
var A4 = ["By having a clear plan of action, everybody that is involved knows what to do", "Working in project will have a learning effect on the entire organisation", "The project leader can take decisions independently"];
var A5 = ["The project goal is a detailed description of the end product. The project result is a broad description of the project goal", "The project goal is SMART formulated. The project result is a description of what will be delivered", "The project goal has a broad focus. The project result is a precise description of the goal"];
var Answers = [A1,A2,A3,A4,A5];
//...and solutions

var S1 = "Improvised activities";
var S2 = "Commission client";
var S3 = "The moment a (sub)product is delivered";
var S4 = "By having a clear plan of action, everybody that is involved knows what to do";
var S5 = "The project goal is SMART formulated. The project result is a description of what will be delivered";
var Solutions = [S1,S2,S3,S4,S5];
//...and points scored for each answer - we will keep it to 1s and 0s but you can be creative!

var SC1 = [1,0,0];
var SC2 = [0,0,1];
var SC3 = [0,0,1];
var SC4 = [1,0,0];
var SC5 = [0,1,0];

var Score = [SC1,SC2,SC3,SC4,SC5];

//We will set our first questions, answers etc. up to appear when the page loads
document.getElementById("QuestionQuiz").innerHTML = "Question 1:"+Questions[i];
document.getElementById("Answer1").innerHTML=Answers[i][0];
document.getElementById("Answer2").innerHTML=Answers[i][1];
document.getElementById("Answer3").innerHTML=Answers[i][2];
document.getElementById("Solution").innerHTML=Solutions[i];


function getSum(a, b) {
    return a + b;
}