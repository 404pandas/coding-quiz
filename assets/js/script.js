// ── DOM refs ────────────────────────────────────────────────────────────────
var startSection    = document.getElementById("start");
var questionsSection = document.getElementById("questions");
var endSection      = document.getElementById("end");
var questionTitle   = document.getElementById("question-title");
var answersDiv      = document.getElementById("answers");
var feedbackDiv     = document.getElementById("declaration");
var finalScoreSpan  = document.getElementById("final-score");
var timerDisplay    = document.getElementById("timer-display");
var usernameInput   = document.getElementById("github-username");
var timerBar        = document.getElementById("timer-bar");

// ── State ───────────────────────────────────────────────────────────────────
var TOTAL_TIME      = 75;
var PENALTY         = 10;
var QUESTIONS_PER_ROUND = 10;
var timeLeft        = TOTAL_TIME;
var currentQuestion = 0;
var timerInterval   = null;
var finalScore      = 0;   // captured at quiz end — not affected by later state changes
var quizEnded       = false; // guard against double endQuiz calls
var questions       = [];  // active set for this round — filled by pickQuestions()

// ── Pick random questions ────────────────────────────────────────────────────
function pickQuestions() {
  var shuffled = questionBank.slice().sort(function () { return Math.random() - 0.5; });
  questions = shuffled.slice(0, QUESTIONS_PER_ROUND);
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

function updateTimerDisplay() {
  timerDisplay.textContent = timeLeft + "s";
  var pct = (timeLeft / TOTAL_TIME) * 100;
  gsap.to(timerBar, { width: pct + "%", duration: 0.3, ease: "power1.out" });

  // Color urgency
  if (timeLeft <= 10) {
    timerBar.style.backgroundColor = "var(--danger)";
    timerDisplay.classList.add("urgent");
  } else if (timeLeft <= 25) {
    timerBar.style.backgroundColor = "var(--warning)";
    timerDisplay.classList.remove("urgent");
  } else {
    timerBar.style.backgroundColor = "var(--success)";
    timerDisplay.classList.remove("urgent");
  }
}

// ── Timer ────────────────────────────────────────────────────────────────────
function startTimer() {
  timeLeft = TOTAL_TIME;
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(function () {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimerDisplay();
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// ── Quiz flow ────────────────────────────────────────────────────────────────
function startQuiz() {
  pickQuestions();
  currentQuestion = 0;
  timeLeft = TOTAL_TIME;
  finalScore = 0;
  quizEnded = false;
  feedbackDiv.textContent = "";
  feedbackDiv.className = "";

  gsap.to(startSection, {
    opacity: 0, y: -30, duration: 0.3, ease: "power2.in",
    onComplete: function () {
      hide(startSection);
      show(questionsSection);
      gsap.fromTo(questionsSection, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      startTimer();
      showQuestion();
    }
  });
}

function showQuestion() {
  var q = questions[currentQuestion];
  questionTitle.textContent = q.title;

  // Build answer buttons
  answersDiv.innerHTML = "";
  q.choices.forEach(function (choice, i) {
    var btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = "<span class='choice-letter'>" + ["A", "B", "C", "D"][i] + "</span>" + choice;
    btn.setAttribute("data-choice", choice);
    answersDiv.appendChild(btn);
  });

  // Stagger animate buttons in
  gsap.fromTo(".answer-btn",
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, stagger: 0.08, duration: 0.3, ease: "power2.out" }
  );

  // Slide question title in
  gsap.fromTo(questionTitle,
    { opacity: 0, y: -16 },
    { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
  );

  // Update progress
  document.getElementById("q-progress").textContent =
    "Question " + (currentQuestion + 1) + " / " + questions.length;

  feedbackDiv.textContent = "";
  feedbackDiv.className = "";
}

function handleAnswer(event) {
  var btn = event.target.closest(".answer-btn");
  if (!btn) return;

  // Disable all buttons to prevent double-click
  document.querySelectorAll(".answer-btn").forEach(function (b) {
    b.disabled = true;
  });

  var chosen  = btn.getAttribute("data-choice");
  var correct = questions[currentQuestion].answer;

  if (chosen === correct) {
    btn.classList.add("correct");
    feedbackDiv.textContent = "Correct!";
    feedbackDiv.className = "feedback correct-text";
    gsap.fromTo(btn, { scale: 1 }, { scale: 1.05, yoyo: true, repeat: 1, duration: 0.18 });
    gsap.fromTo(feedbackDiv, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.25 });
  } else {
    btn.classList.add("wrong");
    // Highlight the correct answer
    document.querySelectorAll(".answer-btn").forEach(function (b) {
      if (b.getAttribute("data-choice") === correct) b.classList.add("correct");
    });
    feedbackDiv.textContent = "Wrong! \u221210 seconds";
    feedbackDiv.className = "feedback wrong-text";
    gsap.fromTo(btn, { x: 0 }, { x: 9, yoyo: true, repeat: 5, duration: 0.06, clearProps: "x" });
    gsap.fromTo(feedbackDiv, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.25 });
    timeLeft = Math.max(0, timeLeft - PENALTY);
    updateTimerDisplay();
    if (timeLeft === 0) {
      stopTimer();
      setTimeout(endQuiz, 900);
      return;
    }
  }

  setTimeout(function () {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      stopTimer();
      endQuiz();
    } else {
      // Slide out old question, slide in new
      gsap.to(questionsSection.querySelector(".question-body"), {
        opacity: 0, x: -30, duration: 0.25, ease: "power2.in",
        onComplete: function () {
          gsap.set(questionsSection.querySelector(".question-body"), { x: 0, opacity: 1 });
          showQuestion();
        }
      });
    }
  }, 900);
}

function endQuiz() {
  if (quizEnded) return;
  quizEnded = true;
  finalScore = timeLeft; // freeze the score right now
  stopTimer();
  gsap.to(questionsSection, {
    opacity: 0, y: -30, duration: 0.3, ease: "power2.in",
    onComplete: function () {
      hide(questionsSection);
      show(endSection);

      finalScoreSpan.textContent = 0;
      gsap.fromTo(endSection, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.5)" });

      // Count-up animation for score
      var counter = { val: 0 };
      gsap.to(counter, {
        val: finalScore,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
        onUpdate: function () {
          finalScoreSpan.textContent = Math.round(counter.val);
        }
      });

      // Stagger in the end-screen rows
      gsap.fromTo(".end-row",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "power2.out", delay: 0.4 }
      );

      usernameInput.value = "";
    }
  });
}

// ── Highscore save ───────────────────────────────────────────────────────────
function saveScore() {
  var username = usernameInput.value.trim();
  if (!username) {
    gsap.fromTo(usernameInput,
      { x: 0 },
      { x: 8, yoyo: true, repeat: 5, duration: 0.06, clearProps: "x" }
    );
    usernameInput.placeholder = "Enter a username first!";
    return;
  }

  var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
  savedScores.push({ name: username, score: finalScore });
  savedScores.sort(function (a, b) { return b.score - a.score; });
  localStorage.setItem("savedScores", JSON.stringify(savedScores));
  window.location.href = "./highscores.html";
}

function backToStart() {
  stopTimer();
  hide(questionsSection);
  hide(endSection);

  gsap.set(startSection, { opacity: 0, y: 30 });
  show(startSection);
  gsap.to(startSection, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
}

// ── Event listeners ──────────────────────────────────────────────────────────
document.getElementById("start-quiz").addEventListener("click", startQuiz);
document.getElementById("answers").addEventListener("click", handleAnswer);
document.getElementById("submit-score").addEventListener("click", saveScore);
document.getElementById("back-to-start-end").addEventListener("click", backToStart);
document.getElementById("back-to-start-quiz").addEventListener("click", function () {
  stopTimer();
  backToStart();
});

// ── Page entrance animation ──────────────────────────────────────────────────
gsap.fromTo(".start-card",
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.1 }
);
gsap.fromTo("header",
  { opacity: 0, y: -40 },
  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
);
