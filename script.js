// =====================
// Data Layer
// =====================

const questions = [
  {
    question: "What is 2 + 2?",
    answer: "4",
  },
  {
    question: "What is the capital of France?",
    answer: "paris",
  },
  {
    question: "Which language runs in a web browser?",
    answer: "javascript",
  },
];

// =====================
// Logic + Output Layer
// =====================

function askQuestion(questionObj) {
  const userAnswer = prompt(questionObj.question); // string or null
  if (userAnswer === null) {
    return ""; // treat cancel as empty answer
  }
  return userAnswer.trim().toLowerCase();
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer.toLowerCase();
}

function showFinalScore(score, total) {
  console.log("------------------------");
  console.log(`Your final score: ${score} / ${total}`);

  const percentage = (score / total) * 100;
  console.log(`Percentage: ${percentage}%`);

  if (percentage >= 70) {
    console.log("Result: Pass ✅");
  } else {
    console.log("Result: Fail ❌");
  }
}

function runQuiz() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const userAnswer = askQuestion(currentQuestion);

    if (checkAnswer(userAnswer, currentQuestion.answer)) {
      console.log("Correct!");
      score++;
    } else {
      console.log(
        `Incorrect. The correct answer was: ${currentQuestion.answer}`,
      );
    }

    console.log(""); // blank line for readability
  }

  showFinalScore(score, questions.length);
}

// Start the quiz
runQuiz();
