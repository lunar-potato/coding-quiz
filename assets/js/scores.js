let leaderboard = [];

function saveScore(initials, score) {
    leaderboard.push({initials, score});
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function leaderboardDisplay() {
    let scoresList = document.getElementById("highscores");
    scoresList.innerHTML = "";

    leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    let scoreSort = leaderboard.sort(function(a, b) {
        return b.score - a.score;
    });

    scoreSort.forEach(function(entry, index) {
        let listItem = document.createElement("li");
        listItem.textContent = `${(index + 1)}. ${entry.initials} : ${entry.score}`;
        scoresList.appendChild(listItem);
    });
}

function clearLeaderboard() {
    localStorage.removeItem('leaderboard');
    leaderboard = [];
    leaderboardDisplay();
}

document.getElementById("clear").addEventListener("click", clearLeaderboard);

leaderboardDisplay();