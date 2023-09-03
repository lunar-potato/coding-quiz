const questionsArea = [
    {
        questionText: "Which of the following is not an HTML tag?",
        choices: ["Body", "Head", "Doctype", "br"],
        answerIndex: 2,
    },
    {
        questionText: "A collection of data containing both properties and methods is called...",
        choices: ["Tag", "Selector", "Object", "Class"],
        answerIndex: 2,
    },
    {
        questionText: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "HyperTag Markup Language", "Hyperlinks Text Mark Language", "Hyperlinking Text Marking Language"],
        answerIndex: 0,
    },
    {
        questionText: "What is the correct tag for a line break?",
        choices: ["<line>", "<bk>", "<brk>", "<br>"],
        answerIndex: 3,
    },
    {
        questionText: "What does CSS stand for?",
        choices: ["Computing Style Sheet", "Creative Style System", "Cascading Style Sheet", "Creative Styling Sheet"],
        answerIndex: 2,
    },
    {
        questionText: "Where should a CSS file be referenced in a HTML file?",
        choices: ["Before any HTML code", "After all HTML code", "Inside the head section", "Inside the body section"],
        answerIndex: 2,
    },
    {
        questionText: "What is the correct format for aligning written content to the center of the page in CSS?",
        choices: ["text-align: center;", "font-align: center;", "text: align-center;", "font: align-center;"],
        answerIndex: 0,
    },
    {
        questionText: "What is the correct format for changing the background color of a div in CSS?",
        choices: ["bg-color: red;", "background: red;", "background-colour: red;", "background-color: red;"],
        answerIndex: 3,
    },
    {
        questionText: "Which is the correct HTML tag for the largest heading?",
        choices: ["<heading>", "<h1>", "<head>", "<title>"],
        answerIndex: 1,
    },
    {
        questionText: "Which symbols are used to indicate an end tag?",
        choices: [">", "/", "*", "!"],
        answerIndex: 1,
    }
];

function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffleQuestions(questionsArea);
export default questionsArea;