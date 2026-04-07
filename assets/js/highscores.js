function renderHighscores() {
  var list = document.getElementById("highscores");
  var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
  list.innerHTML = "";

  if (savedScores.length === 0) {
    var empty = document.createElement("li");
    empty.className = "empty-message";
    empty.textContent = "No scores yet — be the first!";
    list.appendChild(empty);
    gsap.fromTo(empty, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    return;
  }

  savedScores.sort(function (a, b) { return b.score - a.score; });

  savedScores.forEach(function (entry, i) {
    var li = document.createElement("li");
    li.className = "score-entry";
    li.innerHTML =
      "<span class='rank'>#" + (i + 1) + "</span>" +
      "<span class='score-name'>" + entry.name + "</span>" +
      "<span class='score-val'>" + entry.score + "s</span>";
    list.appendChild(li);
  });

  gsap.fromTo(".score-entry",
    { opacity: 0, x: -24 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 0.35, ease: "power2.out", delay: 0.3 }
  );
}

function clearHighscores() {
  gsap.to(".score-entry, .empty-message", {
    opacity: 0, x: 20, stagger: 0.05, duration: 0.25,
    onComplete: function () {
      localStorage.removeItem("savedScores");
      renderHighscores();
    }
  });
}

document.getElementById("clear-highscores").addEventListener("click", clearHighscores);

// ── Entrance ─────────────────────────────────────────────────────────────────
gsap.fromTo("header",
  { opacity: 0, y: -40 },
  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
);
gsap.fromTo(".highscores-card",
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
);

renderHighscores();
