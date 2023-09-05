// Initialize array to store score data to the leaderboard
let leaderboard = [];


// Function to display the leaderboard
function leaderboardDisplay() {
    // Pulling the HTML element to the JS to display leaderboard
    let scoresList = document.getElementById("highscores");
    scoresList.innerHTML = ""; // This is to clear previous content

    // Retrieving leaderboard from local storage
    leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Sorting score entries in descending order
    let scoreSort = leaderboard.sort(function(a, b) {
        return b.score - a.score;
    });

    // Iterates through sorted leaderboard entries to list them.
    scoreSort.forEach(function(entry) {
        let listItem = document.createElement("li");
        listItem.textContent = `${entry.initials} : ${entry.score}`;
        scoresList.appendChild(listItem);
    });
}

// Function to clear leaderboard from local storage and reset the array
function clearLeaderboard() {
    localStorage.removeItem('leaderboard'); // Removing leaderboard from local storage
    leaderboard = []; // Clearing array
    leaderboardDisplay(); // Updating display
}

document.getElementById("clear").addEventListener("click", clearLeaderboard);

leaderboardDisplay();