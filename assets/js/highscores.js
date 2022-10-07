function listHighscores() {
    var scores = JSON.parse(localStorage.getItem("savedScores"));
    scores.sort(function (a,b) {return b.score -a.score;});
    for(var i=0; i<scores.length; i++) {
        var li = document.createElement("li")
        li.textContent = scores[i].init + " - " + scores[i].score;
        document.getElementById("highscores").appendChild(li);
    }
}

function clearHighscores() {
    localStorage.removeItem("savedScores");
    window.location.reload();
}

document.querySelector("#clear").addEventListener("click", clearHighscores);
listHighscores();