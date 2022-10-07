// DOM element variables

// Other variables
var start = document.getElementById("start");
var questions = document.getElementById("questions");
var questiontitle = document.getElementById("question-title");
var answers = document.getElementById("answers");
var end = document.getElementById("");
var declaration = document.getElementById("declaration");
var start = document.getElementById("");

// Start quiz function
function start(event) {
    event.stopPropagation();
    document.getElementById("start").className = "hide";
    document.getElementById("questions").className = "show";
    timerStart();
    getQuestion();
}

// Get/Show question function

// Click question function

// End quiz function

// Timer function

// Highscore function

// Click query selectors function