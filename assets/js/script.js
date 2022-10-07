// DOM element variables

// Other variables
var start = document.getElementById("start");
var questions = document.getElementById("questions");
var questiontitle = document.getElementById("question-title");
var answers = document.getElementById("answers");
var end = document.getElementById("end");
var declaration = document.getElementById("declaration");

// Start quiz function
function start(event) {
    event.stopPropagation();
    document.getElementById("start").className = "hide";
    document.getElementById("questions").className = "show";
    timerStart();
    getQuestion();
}

// Get/Show question function
function getQuestions() {

}

// Click answer function
function clickAnswer (event) {

}

// End quiz function
function end() {
    
}

// Timer function
function time() {


}
// Highscore function
function highscore() {

}

// Click query selectors function
start quiz
click answers
submit initials