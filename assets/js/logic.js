// Importing questions.js
let questions = window.questionsArea;

// Defining variables to pull elements from HTML
let buttonStart = document.getElementById("start");
let questionsEl = document.getElementById("questions");
let timerEl = document.getElementById("time");
let choicesEl = document.getElementById("choices");
let userInitials = document.getElementById("initials");
let buttonSubmit = document.getElementById("submit");
let feedbackEl = document.getElementById("feedback");
let highScores = document.querySelector(".scores a");

// Initializing variables for quiz state
let currentQuestIndex = 0;
let timeLeft = 0;
let score = 0;
let timerInterval;

// Function to start quiz
function startQuiz() {
    // Hiding start screen to display questions
    let startScreenEl = document.getElementById("start-screen");
    let endScreenEl = document.getElementById("end-screen")
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    buttonStart.style.display = "none";
    endScreenEl.classList.add("hide");
    choicesEl.textContent = "";

    // Initializing quiz variables
    currentQuestIndex = 0;
    timeLeft = questions.length * 10;
    score = 0;

    // Starting timer
    timerInterval = setInterval(updateTimer, 1000);
    timerEl.textContent = timeLeft;

    // Displaying first question
    displayQuestion();
}

// Function to display question
function displayQuestion() {
    let currentQuestion = questions[currentQuestIndex];
    let questionTitle = document.getElementById("question-title");

    questionTitle.textContent = currentQuestion.questionText;
    choicesEl.innerHTML = "";

    if (currentQuestIndex >= questions.length) {
        endQuiz();
        return;
    }

    currentQuestion.choices.forEach(function(choice) {
        let buttonChoice = document.createElement("button");
        buttonChoice.textContent = choice;
        buttonChoice.addEventListener("click", function() {
            checkAnswer(choice);
        });
        choicesEl.appendChild(buttonChoice);
    });
}

// Function to check the user's answer
function checkAnswer(selectedChoice) {
    let question = questions[currentQuestIndex];

    if (selectedChoice === question.answer) {
        feedbackEl.textContent = "Correct!";
        document.getElementById("correctSfx").play();
    } else {
        timeLeft -= 10;
        feedbackEl.textContent = "Nope!";
        document.getElementById("incorrectSfx").play();
    }

    feedbackEl.classList.remove("hide");
    setTimeout(function() {
        feedbackEl.textContent = "";
        feedbackEl.classList.add("hide");
    }, 1000);

    currentQuestIndex++;
    
    if (currentQuestIndex >= questions.length || timeLeft <= 0) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

// Function to update timer
function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
        endQuiz();
    }
    timerEl.textContent = `${timeLeft}`;
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);

    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.classList.remove("hide");

    // Calculates the score according to the time left.
    score = timeLeft;
    
    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = score;

    questionsEl.setAttribute("class", "hide");
}

// Functionto save score to leaderboard local storage
function saveScore(initials, score) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ initials, score });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

buttonStart.addEventListener("click", startQuiz);

buttonSubmit.addEventListener("click", function() {
    let userInitials = initials.value.trim();
    if (userInitials !== "") {
        saveScore(userInitials, score);
        highScores.click(); // Redirect to highscore page
    }
});

highScores.addEventListener("click", function() {
    window.location.href = "highscores.html"; // Redirect to highscore page
});