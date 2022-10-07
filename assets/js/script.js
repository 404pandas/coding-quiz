// DOM element variables
var getTimer = document.getElementById("time");
var getStart = document.getElementById("start");
var getQuestions = document.getElementById("questions");
var getQuestionTitle = document.getElementById("question-title");
var getAnswers = document.getElementById("answers");
var getEnd = document.getElementById("end");
var getFinalScore = document.getElementById("final-score")
var getDeclaration = document.getElementById("declaration");
var getGithubUsername = document.getElementById("github-username")

// Other variables
var time = 4000;
var currentQuestion = 0;
var timer;

// Start quiz function
function startQuiz(event) {
    event.stopPropagation();
    getStart.className = "hide";
    getQuestions.className = "show";
    timerStart();
    getQuestion();
}

// Get/Show question function
function getQuestion() {
var questionString = questions[currentQuestion];
getQuestionTitle.textContent = questionString.title;
getAnswers.innerHTML = "";

for(var i=0; i<questionString.answers.length; i++) {
var btn = document.createElement("button");
btn.textContent = i+1 + ". " + questionString.answers[i];
btn.setAttribute("data", i);
document.querySelector("#answers").appendChild(btn);
}
}

// Click answer function
function clickAnswer (event) {
var element = event.target;
if (element.matches("button") !== true) {
}
else {
    var questionString = getAnswers[currentQuestion];
    if(questionString.answer !== questionString.choices[element.getAttribute("data")]){
        if(time>10){
            time -= 10;
            getTimer.textContent = "Time: " + time;
        }
        else {
            time -= time;
            getTimer.textContent = "Time: " + time;
quizEnd();
        }
        console.log("You guessed incorrectly!")
        getDeclaration.textContent = "Incorrect!";
        getDeclaration.className = "show";
    }
    else {
        console.log("You guessed correctly!");
        getDeclaration.textContent = "Correct!";
        getDeclaration.className = "show";
        currentQuestion++;
        if(currentQuestion>20){
            quizEnd()
        }
        else {
            getQuestion();
        }
    }
}
}

// End quiz function
function endQuiz() {
clearInterval(timer);
getEnd.className = "show";
getFinalScore.textContent = time;
getQuestions.className = "hide";
getDeclaration.className = "hide";
}

// Timer function
function timerStart() {
timer = setInterval(function() {
    time--;
    timer.textContent = "Time: " + time;
    if (time === 0) {
        clearInterval(timer);
        endQuiz();
    }
    // Timer math
    // (20 questions * 60 seconds per question) = 1200 seconds
    // (20 questions * 3 wrong options * 10 seconds for each wrong answer) = 600 seconds
    // Timer minimum total = 1800 seconds (round up to 4000 seconds until code dialed in)
}, 4000);
}

// Highscore function
function highscore() {
var username = getGithubUsername.value;
var currentScore = {init: username, score: time};
var savedScores = JSON.parse(localStorage.getItem(savedScores));
if(username === ""){
    alert ("You must enter your Github Username to save your score!");
}

else {
if (savedScores !== null) {
localStorage.setItem("savedScores", JSON.stringify(savedScores));
}
else {
    savedScores = [currentScore];
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
}
document.location.href = "./highscores.html";
}
}


// Click query selectors
document.querySelector("#start-quiz").addEventListener("click", start)
document.querySelector("#questions").addEventListener("click", clickAnswer);
document.querySelector("#submit").addEventListener("click", highscore);
document.querySelector("#clear-highscores").addEventListener("click", clearHighscores)
document.querySelector("#back-to-start").addEventListener("click", backToStart)