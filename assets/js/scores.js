let leaderboard = [];

function leaderboardDisplay() {
    let scoresList = document.getElementById("highscores");
    scoresList.innerHTML = "";

    leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    let scoreSort = leaderboard.sort(function(a, b) {
        return b.score - a.score;
    });

    scoreSort.forEach(function(entry) {
        let listItem = document.createElement("li");
        listItem.textContent = `${entry.initials} : ${entry.score}`;
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