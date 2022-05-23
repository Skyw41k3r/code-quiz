var testQuestions = [{
    question: "Where can you find 'var =' in VSCode?",
    answers: ["HTML", "CSS", "JavaScript"],
    correctAnswer: "JavaScript",
}, {
    question: "Where can you find '<body>' in VSCode?",
    answers: ["HTML", "CSS", "JavaScript"],
    correctAnswer: "HTML",
}, {
    question: "Where can you find '.array' in VSCode?",
    answers: ["HTML", "CSS", "JavaScript"],
    correctAnswer: "CSS",
}];
var quizContainer = document.querySelector("#testAnswers")
var question = 0;

function createQuestion(question) {
    var label = document.createElement("P");
    label.textContent = testQuestions[question].question;
    document.getElementById("testQuestions").append(label);

    document.getElementById("testAnswers").innerHTML = "";
    for (let i = 0; i < testQuestions[question].answers.length; i++) {

        var div = document.createElement("div");
        div.classList.add("form-check");

        var input = document.createElement("input");
        input.classList.add("form-check-input");
        input.value = testQuestions[question].answers[i];

        var label2 = document.createElement("label");
        label2.textContent = testQuestions[question].answers[i];

        div.append(input);
        div.append(label2);
        document.getElementById("testAnswers").append(div);

    }

}

function answerChecked(event) {
    var answerGiven = event.target.textContent;
    console.log(answerGiven);
    var correctAnswer = document.createElement("p");
    correctAnswer.id = "answer - result - text";
    if (answerGiven === testQuestions[question].answer) {
        correctAnswer.textContent = "That is correct!";
        timer.append(correctAnswer);
    } else {
        correctAnswer.textContent = "That is incorrect!";
        timeLeft -= 5;
        timer.append(correctAnswer);
    };
    // CLears current question and goes to next question //
    quizContainer.innerHTML = "";
    question++;
    createQuestion();
};

var timeLeft = 60;
var timer = document.getElementById("timer");

function countdown() {
    clearInterval(timer);
    timeLeft = 60
    document.getElementById("timer").innerHTML = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval("timer");
        }

    }, 1000);
}

function start() {
    console.log("starting countdown")
    countdown();
    console.log("Loading Question...")
    createQuestion(1);
    console.log(startTest);

}
var startTest = document.getElementById("begin");
startTest.addEventListener("click", start);
quizContainer.addEventListener("click", answerChecked);