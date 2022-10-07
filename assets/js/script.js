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

// Start quiz function
function start(event) {
    event.stopPropagation();
    document.getElementById("start").className = "hide";
    document.getElementById("questions").className = "show";
    timerStart();
    getQuestion();
}

// Get/Show question function
function getQuestion() {
var questionString = document.getElementById("questions")[currentQuestion];
document.getElementById("question-title").textContent = questionString.title;
document.getElementById("answers").innerHTML = "";

for(var i=0; i<questionValue.answers.length; i++) {
var btn = document.createElement("button");
btn.textContent = i+1 + ". " + questionValue.answers[i];
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
    var questionValue = document.getElementById("answers")[currentQuestion];
    if(questionValue.answer !== questionValue.choices[element.getAttribute("data")]){
        if(time>10){
            time -= 10;
            document.getElementById("timerText").textContent = "Time: " + time;
        }
        else {
            time -= time;
            document.getElementById("timerText").textContent = "Time: " + time;
quizEnd();
        }
        console.log("You guessed incorrectly!")
        document.getElementById("declaration").textContent = "Incorrect!";
        document.getElementById("declaration").className = "show";
    }
    else {
        console.log("You guessed correctly!");
        document.getElementById("declaration").textContent = "Correct!";
        document.getElementById("declaration").className = "show";
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
function end() {
clearInterval(timer);
document.getElementById("end").className = "show";
document.getElementById("final-score").textContent = time;
document.getElementById("questions").className = "hide";
document.getElementById("declaration").className = "hide";
}

// Timer function
function timer() {
timer = setInterval(function() {
    time--;
    timer.textContent = "Time: " + time;
    if (time === 0) {
        clearInterval(timer);
        quizEnd();
    }
    // Timer math
    // (20 questions * 60 seconds per question) = 1200 seconds
    // (20 questions * 3 wrong options * 10 seconds for each wrong answer) = 600 seconds
    // Timer minimum total = 1800 seconds (round up to 4000 seconds until code dialed in)
}, 4000);
}

// Highscore function
function highscore() {
var username = document.getElementById("github-username").value;
var currentScore = {init: username, score: time};
var savedScores = JSON.parse(localStorage.getItem(savedScores));
if(username === ""){
    alert ("You must enter your Github Username to save your score!");
}

else {
if (savedScores !== null) {
localStorage.setItem("savedScores", JSON.stringify(savedSCores));
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