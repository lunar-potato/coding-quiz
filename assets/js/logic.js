let questions = window.questionsArea;

let buttonStart = document.getElementById("start");
let questionsEl = document.getElementById("questions");
let timerEl = document.getElementById("time");
let choicesEl = document.getElementById("choices");
let userInitials = document.getElementById("initials");
let buttonSubmit = document.getElementById("submit");
let feedbackEl = document.getElementById("feedback");
let highScores = document.querySelector(".scores a");

let currentQuestIndex = 0;
let timeLeft = 0;
let score = 0;
let timerInterval;

function startQuiz() {
    let startScreenEl = document.getElementById("start-screen");
    let endScreenEl = document.getElementById("end-screen")
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    buttonStart.style.display = "none";
    endScreenEl.classList.add("hide");
    choicesEl.textContent = "";

    currentQuestIndex = 0;
    timeLeft = questions.length * 10;
    score = 0;
    timerInterval = setInterval(updateTimer, 1000);

    timerEl.textContent = timeLeft;
    displayQuestion();
}

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
        buttonChoice.addEventListener("click", () => checkAnswer(choice));
        choicesEl.appendChild(buttonChoice);
    });
}

function checkAnswer(selectedI) {
    let question = questions[currentQuestIndex];

    if (selectedI === question.answer) {
        score += 10;
        feedbackEl.textContent = "Correct!";
    } else {
        timeLeft -= 10;
        feedbackEl.textContent = "Nope!";
    }

    feedbackEl.classList.remove("hide");
    setTimeout(function() {
        feedbackEl.textContent = "";
        feedbackEl.classList.add("hide");
    }, 1000);

    currentQuestIndex++;
    displayQuestion();
}

function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
        endQuiz();
    }
    timerEl.textContent = `${timeLeft}`;
}

function endQuiz() {
    clearInterval(timerInterval);

    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.classList.remove("hide");
    
    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = timeLeft;

    questionsEl.setAttribute("class", "hide");
}

buttonStart.addEventListener("click", startQuiz);

buttonSubmit.addEventListener("click", function() {
    let initials = userInitials.value.trim();
    if (initials !== "") {
        alert(`Initials: ${initials}, Score: ${score}`);
        userInitials.value = "";
    }
});

highScores.addEventListener("click", function() {
    alert("View leaderboard!");
});